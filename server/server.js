require("dotenv").config();

const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const axios = require("axios");
const { Resend } = require("resend");
const rateLimit = require("express-rate-limit");

const app = express();
const PORT = process.env.PORT || 3001;

// ========== Middleware ==========
const corsOptions = {
  origin: process.env.CLIENT_URL || "http://localhost:3000",
};
app.use(cors(corsOptions));
app.use(express.json());

// ========== Rate Limiting ==========
const enquiryLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 3, // Limit each IP to 3 requests per minute
  message: {
    success: false,
    message: "Too many submissions. Please try again in a minute.",
  },
});
app.use("/api/enquiries", enquiryLimiter);

// ========== File Setup ==========
const DATA_FILE = path.join(__dirname, "data", "enquiries.json");

const readEnquiries = () => {
  try {
    const data = fs.readFileSync(DATA_FILE, "utf8");
    return JSON.parse(data);
  } catch (err) {
    console.error("Error reading enquiries file:", err);
    return [];
  }
};

const saveEnquiries = (enquiries) => {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(enquiries, null, 2), "utf8");
  } catch (err) {
    console.error("Error saving enquiries:", err);
  }
};

// ========== Email Setup ==========
const resend = new Resend(process.env.RESEND_API_KEY);

// ========== Routes ==========

// GET: All enquiries
app.get("/api/enquiries", (req, res) => {
  const enquiries = readEnquiries();
  res.json({ enquiries });
});

// POST: New enquiry with reCAPTCHA and email
app.post("/api/enquiries", async (req, res) => {
  const { recaptchaToken, ...enquiry } = req.body;

  // 1. Verify reCAPTCHA
  if (!recaptchaToken) {
    return res.status(400).json({ success: false, message: "Missing reCAPTCHA token." });
  }

  try {
    const verification = await axios.post(
      "https://www.google.com/recaptcha/api/siteverify",
      null,
      {
        params: {
          secret: process.env.RECAPTCHA_SECRET,
          response: recaptchaToken,
        },
      }
    );

    if (!verification.data.success) {
      console.warn("reCAPTCHA verification failed:", verification.data);
      return res.status(403).json({ success: false, message: "reCAPTCHA verification failed." });
    }
  } catch (err) {
    console.error("reCAPTCHA verification error:", err.message);
    return res.status(500).json({ success: false, message: "reCAPTCHA verification failed." });
  }

  // 2. Validate required fields
  if (!enquiry.name || !enquiry.email || !enquiry.message) {
    return res.status(400).json({ success: false, message: "Missing required fields." });
  }

  // 3. Save to JSON
  enquiry.timestamp = new Date().toISOString();
  const enquiries = readEnquiries();
  enquiries.push(enquiry);
  saveEnquiries(enquiries);

  // 4. Send Email
  try {
    await resend.emails.send({
      from: "Event Enquiries <onboarding@resend.dev>", // You can later use your own domain here
      to: [process.env.ADMIN_EMAIL],
      subject: "New Event Enquiry",
      text: `
New enquiry submitted:

Name: ${enquiry.name}
Email: ${enquiry.email}
Phone: ${enquiry.phone || "N/A"}
Message: ${enquiry.message}
Submitted At: ${enquiry.timestamp}
      `,
    });

    console.log("✅ Enquiry saved and email sent");
    res.status(200).json({ success: true, message: "Enquiry submitted successfully." });
  } catch (err) {
    console.error("❌ Failed to send email:", err);
    res.status(500).json({
      success: false,
      message: "Enquiry saved, but failed to send email.",
    });
  }
});

// ========== Start Server ==========
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});

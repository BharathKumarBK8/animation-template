import React from "react";
import Section from "../components/Section";
import heroBg from "../assets/hero-bg.jpg";

const ContactUsPage: React.FC = () => {
  return (
    <>
      <Section
        contentAnimationType="translateY"
        contentClassName="content-translateY"
        className="section hero"
        backgroundImage={heroBg}
        backgroundClassName="background"
        backgroundAnimationType="scaleAndTranslateY"
        scrollOffset={["start start", "end start"]}
        backgroundScaleRange={[1.2, 1]}
        backgroundYRange={[0, -100]}
        contentYRange={[0, -150]}
        contentInputRange={[0, 0.8]}
      >
        <h1 style={{ color: "white" }}>Contact Us</h1>
        <p style={{ color: "whitesmoke" }}>
          Get in touch with our friendly team today
        </p>
      </Section>

      <Section
        className="section"
        contentClassName="card"
        contentAnimationType="translateYAndOpacity"
      >
        <h2>Visit Us</h2>
        <p>
          📍 42/2, Alagar Kovil Main Rd, Appanthirupathi, Madurai, Tamil Nadu
          625301
        </p>
        <p>📞 (+91) 99451 49151</p>
        <ul style={{ listStyleType: "none", padding: 0, marginTop: "1rem" }}>
          <li>
            🕒 <strong>Monday - Saturday:</strong> 10:00 AM – 9:00 PM
          </li>
          <li>
            🚫 <strong>Sunday:</strong> Closed
          </li>
        </ul>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.9427869599717!2d78.19355829999999!3d10.021580199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c702d07a7ecb%3A0x923cdd3fa082bc1d!2sDr.JOE's%20Dental%20Hospital!5e0!3m2!1sen!2sin!4v1756906659216!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0, borderRadius: "12px", marginTop: "1rem" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Section>

      <Section
        className="section"
        contentClassName="card"
        contentAnimationType="translateYAndOpacity"
      >
        <h2>Send Message</h2>
        <form style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <input
            type="text"
            placeholder="Your Name"
            style={{
              padding: "1rem",
              borderRadius: "8px",
              border: "1px solid #ddd",
            }}
          />
          <input
            type="email"
            placeholder="Your Email"
            style={{
              padding: "1rem",
              borderRadius: "8px",
              border: "1px solid #ddd",
            }}
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            style={{
              padding: "1rem",
              borderRadius: "8px",
              border: "1px solid #ddd",
              resize: "vertical",
            }}
          ></textarea>
          <button type="submit" className="btn-primary">
            Send Message
          </button>
        </form>
      </Section>

      <Section
        className="section"
        contentClassName="card"
        contentAnimationType="translateYAndOpacity"
      >
        <h2>Emergency Contact</h2>
        <p>For dental emergencies outside business hours:</p>
        <p>
          📞 <strong>Emergency Line:</strong> (+91) 99451 49151
        </p>
        <p>⚡ Available 24/7 for urgent dental care</p>
        <p>💬 WhatsApp us for quick responses</p>
      </Section>
    </>
  );
};

export default ContactUsPage;

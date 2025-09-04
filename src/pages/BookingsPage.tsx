import React from "react";
import Section from "../components/Section";
import "./BookingsPage.css";

const Bookings: React.FC = () => {
  return (
    <div>
      <Section
        contentAnimationType="translateY"
        contentClassName="content-translateY"
        className="section section-hero"
        backgroundClassName="background"
        backgroundStyle={{ inset: "-10%", backgroundPosition: "center top" }}
        backgroundAnimationType="scaleAndTranslateY"
        scrollOffset={["start end", "end start"]}
        backgroundScaleRange={[1.2, 1]}
        backgroundYRange={[0, -100]}
        contentYRange={[0, -150]}
        contentInputRange={[0, 0.8]}
      >
        <h1>Book an Appointment</h1>
        <p>
          Choose a convenient time and service — our friendly team is here to
          help you smile.
        </p>
      </Section>

      {/* Booking Form Section */}
      <Section
        className="section"
        contentClassName="card"
        contentAnimationType="scaleAndTranslateY"
        contentYRange={[50, 0]}
        contentOpacityRange={[0, 1]}
      >
        {/* Replace with your actual form or 3rd-party embed (like Calendly, Zocdoc, etc.) */}
        <form className="booking-form">
          <label>
            Full Name
            <input type="text" placeholder="John Doe" required />
          </label>
          <label>
            Email
            <input type="email" placeholder="you@example.com" required />
          </label>
          <label>
            Service
            <select required>
              <option value="">Select a service</option>
              <option>General Checkup</option>
              <option>Cleaning</option>
              <option>Whitening</option>
              <option>Emergency Visit</option>
            </select>
          </label>
          <label>
            Preferred Date
            <input type="date" required />
          </label>
          <label>
            Additional Notes
            <textarea placeholder="Anything we should know?" />
          </label>
          <button type="submit" className="btn-primary">
            Submit Request
          </button>
        </form>
      </Section>

      {/* Optional Call to Action Section */}
      <Section
        className="section"
        contentClassName="content-callout"
        contentAnimationType="translateYAndOpacity"
        scrollOffset={["start end", "end start"]}
        contentYRange={[30, 0]}
        contentOpacityRange={[0, 1]}
      >
        <h2 style={{ color: "white" }}>Prefer to call?</h2>
        <p style={{ color: "whitesmoke" }}>
          Reach us directly at <strong>(123) 456-7890</strong> or email{" "}
          <strong>appointments@drjoe.com</strong>
        </p>
      </Section>
    </div>
  );
};

export default Bookings;

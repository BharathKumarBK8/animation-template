import React from "react";
import Section from "../components/Section";
import "./BookingsPage.css";
import { AnimationType } from "../utils/animationHooks";

const Bookings: React.FC = () => {
  return (
    <div>
      <Section
        contentAnimation={AnimationType.TRANSLATE_Y}
        contentStyle={{ transition: "transform 0.3s ease" }}
        className="section section-hero"
        backgroundClassName="background"
        backgroundStyle={{ inset: "-10%", backgroundPosition: "center top" }}
        backgroundAnimation={AnimationType.SCALE_AND_TRANSLATE_Y}
        scrollOffset={["start end", "end start"]}
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
        contentAnimation={AnimationType.SCALE_AND_TRANSLATE_Y}
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
        contentAnimation={AnimationType.TRANSLATE_Y_AND_OPACITY}
        scrollOffset={["start end", "end start"]}
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

import React from "react";
import Section from "../components/Section";

const Contact: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <Section
        className="section"
        contentClassName="content-center"
        contentAnimationType="translateYAndOpacity"
        contentYRange={[40, 0]}
        contentOpacityRange={[0, 1]}
      >
        <h1>Contact Us</h1>
        <p>Have a question or need to reach us? We’re here to help.</p>
      </Section>

      {/* Contact Info Grid */}
      <Section
        className="section"
        contentClassName="content-grid"
        contentAnimationType="scaleAndTranslateY"
        scrollOffset={["start end", "end start"]}
      >
        <div className="card">
          <h2>Call Us</h2>
          <p>(123) 456-7890</p>
        </div>
        <div className="card">
          <h2>Email</h2>
          <p>contact@drjoe.com</p>
        </div>
        <div className="card">
          <h2>Visit Us</h2>
          <p>
            123 Smile Street, Suite 100
            <br />
            Toothville, TS 54321
          </p>
        </div>
      </Section>

      {/* Contact Form */}
      <Section
        className="section"
        contentClassName="content-plain"
        contentAnimationType="translateYAndOpacity"
        contentYRange={[30, 0]}
        contentOpacityRange={[0, 1]}
      >
        <form className="booking-form">
          <label>
            Name
            <input type="text" placeholder="Jane Doe" required />
          </label>
          <label>
            Email
            <input type="email" placeholder="jane@example.com" required />
          </label>
          <label>
            Message
            <textarea placeholder="Your message here..." required />
          </label>
          <button type="submit" className="cta-button">
            Send Message
          </button>
        </form>
      </Section>

      {/* Optional Google Map */}
      <Section
        className="section"
        contentClassName="content-plain"
        contentAnimationType="opacity"
        contentOpacityRange={[0, 1]}
      >
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=..." // Replace with your map embed link
          width="100%"
          height="400"
          style={{ border: 0, borderRadius: "12px" }}
          loading="lazy"
          allowFullScreen
        />
      </Section>
    </div>
  );
};

export default Contact;

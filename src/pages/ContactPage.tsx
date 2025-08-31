import React from "react";

const ContactPage: React.FC = () => {
  return (
    <div className="section">
      <div className="card">
        <h1>Contact Cosmos</h1>
        <p>
          Ready to explore the universe together? Get in touch with our team to
          discuss your mobile planetarium needs.
        </p>
        <br />
        <div style={{ textAlign: "left", maxWidth: "400px", margin: "0 auto" }}>
          <p>
            <strong>Email:</strong> hello@cosmos-planetarium.com
          </p>
          <p>
            <strong>Phone:</strong> +1 (555) 123-STAR
          </p>
          <p>
            <strong>Address:</strong> 123 Galaxy Way, Starfield City
          </p>
          <br />
          <p>
            <strong>Business Hours:</strong>
          </p>
          <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
          <p>Saturday: 10:00 AM - 4:00 PM</p>
          <p>Sunday: By appointment only</p>
          <br />
          <p style={{ textAlign: "center", color: "#ff005f" }}>
            Follow us on social media for cosmic updates!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

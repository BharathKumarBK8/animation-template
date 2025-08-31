import React from "react";
import "./PartnershipPage.css";

const PartnershipsPage: React.FC = () => {
  return (
    <div className="section">
      <div className="partnerships-container">
        {/* Left side - Canvas */}
        <div className="partnership-canvas">
          <h2>
            Want to join
            <br />
            <span style={{ textDecoration: "underline" }}>with us</span>?
          </h2>
        </div>

        {/* Right side - Form */}
        <div className="partnership-form">
          <form>
            <div className="form-group">
              <label>Organization Name</label>
              <input type="text" placeholder="Your organization name" />
            </div>

            <div className="form-group">
              <label>Contact Person</label>
              <input type="text" placeholder="Your full name" />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="your@email.com" />
            </div>

            <div className="form-group">
              <label>Partnership Type</label>
              <select>
                <option>Select partnership type</option>
                <option>Educational Institution</option>
                <option>Science Museum</option>
                <option>Corporate Sponsor</option>
                <option>Local Organization</option>
              </select>
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea placeholder="Tell us about your partnership goals..."></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PartnershipsPage;

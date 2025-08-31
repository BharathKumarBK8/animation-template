import React from "react";

const BookingsPage: React.FC = () => {
  return (
    <div className="section">
      <div className="card">
        <h1>Book Your Cosmic Experience</h1>
        <p>
          Ready to bring the universe to your school, event, or community?
          Schedule your mobile planetarium experience today.
        </p>
        <br />
        <div style={{ textAlign: "left", maxWidth: "500px", margin: "0 auto" }}>
          <h3 style={{ color: "#ff005f", marginBottom: "1rem" }}>
            Available Programs:
          </h3>
          <p>
            <strong>Educational Shows:</strong> Curriculum-aligned astronomy
            content
          </p>
          <p>
            <strong>Public Events:</strong> Community stargazing experiences
          </p>
          <p>
            <strong>Special Occasions:</strong> Birthday parties and
            celebrations
          </p>
          <p>
            <strong>Corporate Events:</strong> Team building under the stars
          </p>
          <br />
          <p style={{ textAlign: "center", color: "#ff005f" }}>
            Contact us to customize your cosmic journey!
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookingsPage;

import React from "react";
import Section from "../components/Section";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import { useNavigate } from "react-router-dom";

const Services: React.FC = () => {
  const handleButtonClick = () => {
    navigate("/bookings");
  };

  const navigate = useNavigate();
  return (
    <div>
      {/* Hero */}
      <Section
        className="section section-hero"
        contentAnimationType="none"
        contentClassName="content-translateY"
      >
        <h1>Our Dental Services</h1>
        <p>
          Whether you need a routine cleaning or a complete smile
          transformation, Dr. Joe's Dental Clinic has you covered.
        </p>
      </Section>

      {/* General Dentistry - Left Overlay */}
      <Section
        className="section"
        style={{ overflow: "hidden" }}
        backgroundImage={img4}
        backgroundClassName="background"
        backgroundAnimationType="scaleAndTranslateY"
        backgroundScaleRange={[1.2, 1]}
        backgroundYRange={[0, -50]}
        scrollOffset={["start start", "end start"]}
        contentClassName="content-overlay-left"
        contentStyle={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "2rem",
        }}
        contentAnimationType="none"
      >
        <h2 style={{ color: "white" }}>General Dentistry</h2>
        <p style={{ color: "whitesmoke" }}>
          Cleanings, fillings, and routine checkups for your everyday dental
          health.
        </p>
      </Section>

      {/* Cosmetic Dentistry - Right Overlay */}
      <Section
        className="section"
        backgroundImage={img5}
        style={{ overflow: "hidden" }}
        backgroundClassName="background"
        backgroundAnimationType="scaleAndTranslateY"
        backgroundScaleRange={[1.2, 1]}
        backgroundYRange={[0, -50]}
        scrollOffset={["start start", "end start"]}
        contentClassName="content-overlay-right"
        contentAnimationType="none"
        contentStyle={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "2rem",
        }}
      >
        <h2 style={{ color: "white" }}>Cosmetic Dentistry</h2>
        <p style={{ color: "whitesmoke" }}>
          Whitening, veneers, and smile makeovers to perfect your smile.
        </p>
      </Section>

      {/* Emergency Services - Left Overlay */}
      <Section
        className="section"
        style={{ overflow: "hidden" }}
        backgroundImage={img6}
        backgroundClassName="background"
        backgroundAnimationType="scaleAndTranslateY"
        backgroundScaleRange={[1.2, 1]}
        backgroundYRange={[0, -50]}
        scrollOffset={["start start", "end start"]}
        contentClassName="content-overlay-left"
        contentAnimationType="none"
        contentStyle={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "2rem",
        }}
      >
        <h2 style={{ color: "white" }}>Emergency Services</h2>
        <p style={{ color: "whitesmoke" }}>
          Same-day appointments for dental emergencies when you need us most.
        </p>
      </Section>

      {/* CTA */}
      <Section
        className="section"
        style={{ overflow: "hidden" }}
        contentClassName="content-plain"
        contentAnimationType="none"
      >
        <h2>Ready for your healthiest smile yet?</h2>
        <p>
          Book your appointment today and experience dentistry that puts your
          content first.
        </p>
        <button className="btn-primary" onClick={handleButtonClick}>
          Book Now
        </button>
      </Section>
    </div>
  );
};

export default Services;

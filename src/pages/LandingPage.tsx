import EventsPage from "../pages/EventsPage";
import heroBg from "../assets/heroBg.webp";
import section4 from "../assets/section4.jpg";
import section5 from "../assets/section5.jpg";
import section6 from "../assets/section6.jpg";
import Section from "../components/Section";
import Form from "../components/Form";
import { AnimationType } from "../utils/animationHooks";

const LandingPage: React.FC = () => {
  return (
    <>
      <Section
        id="hero"
        className="section section-hero"
        scrollOffset={["start start", "end start"]}
        backgroundClassName="background"
        backgroundImage={heroBg}
        backgroundStyle={{ inset: "-12%", backgroundPosition: "center" }}
        backgroundAnimation={AnimationType.SCALE_AND_TRANSLATE_Y}
        contentAnimation={AnimationType.TRANSLATE_Y}
        contentStyle={{
          zIndex: "1",
        }}
      >
        <h1 style={{ color: "white" }}>
          We Bring <span>Ideas</span> to Life
        </h1>
        <p style={{ color: "whitesmoke" }}>
          At <strong>R2 Media</strong>, we craft unforgettable experiences
          through <strong>Event Management</strong>,{" "}
          <strong>Video Production</strong>, <strong>Photography</strong>, and{" "}
          <strong>Creative Advertising</strong>.
        </p>
        <button className="cta">Let’s Create Together</button>
      </Section>
      <Section id="works">
        <EventsPage />
      </Section>
      <Section
        id="services"
        /*         style={{
          paddingLeft: "2rem",
          paddingRight: "2rem",
          paddingTop: "4rem",
          paddingBottom: "4rem",
        }} */
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "3rem",
            fontSize: "2.5rem",
          }}
        >
          Our Services
        </h1>
        <Section
          className="section"
          style={{ overflow: "hidden" }}
          backgroundImage={section4}
          backgroundClassName="background"
          backgroundAnimation={AnimationType.SCALE_AND_TRANSLATE_Y}
          scrollOffset={["start start", "end start"]}
          contentClassName="content-overlay-left"
          contentStyle={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            padding: "2rem",
          }}
          contentAnimation={AnimationType.NONE}
        >
          <h2 style={{ color: "white" }}>Event Production Hub</h2>
          <p style={{ color: "whitesmoke" }}>
            From concept to curtain call — we bring your events to life with
            professional-grade planning, filming, and production.
          </p>
        </Section>
        <Section
          className="section"
          backgroundImage={section5}
          style={{ overflow: "hidden" }}
          backgroundClassName="background"
          backgroundAnimation={AnimationType.SCALE_AND_TRANSLATE_Y}
          scrollOffset={["start start", "end start"]}
          contentClassName="content-overlay-right"
          contentAnimation={AnimationType.NONE}
          contentStyle={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            padding: "2rem",
          }}
        >
          <h2 style={{ color: "white" }}>Documentary Filmmaking</h2>
          <p style={{ color: "whitesmoke" }}>
            Real stories, powerfully told. We specialize in documentary
            production that informs, inspires, and resonates.
          </p>
        </Section>
        <Section
          className="section"
          style={{ overflow: "hidden" }}
          backgroundImage={section6}
          backgroundClassName="background"
          backgroundAnimation={AnimationType.SCALE_AND_TRANSLATE_Y}
          scrollOffset={["start start", "end start"]}
          contentClassName="content-overlay-left"
          contentAnimation={AnimationType.NONE}
          contentStyle={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            padding: "2rem",
          }}
        >
          <h2 style={{ color: "white" }}>Talent Shows & Competitions</h2>
          <p style={{ color: "whitesmoke" }}>
            We capture every spotlight moment — from performances to judging —
            with cinematic quality and seamless coordination.
          </p>
        </Section>
      </Section>
      <Section
        id="contact"
        contentAnimation={AnimationType.SLIDE_UP}
        useWhileInView
        once
        contentClassName="contact-section-content"
      >
        <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>
          Enquiry / Booking Form
        </h2>
        <Form
          fields={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Name",
              required: true,
            },
            {
              name: "email",
              type: "email",
              placeholder: "Your Email",
              required: true,
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone Number (optional)",
            },
            {
              name: "message",
              type: "textarea",
              placeholder: "Your Message",
              required: true,
              rows: 6,
            },
          ]}
        />
      </Section>
      <Section
        id="contact"
        className="section"
        contentStyle={{ transition: "transform 0.3s ease" }}
        contentAnimation={AnimationType.TRANSLATE_Y}
        scrollOffset={["start end", "end start"]}
      >
        <h2>Visit Us</h2>
        <p>
          📍 Land Mark, No. 6, First Floor, Sri Shopping Complex Vasu Nagar 2nd
          Street, New, Natham Rd, above Chennai Kulfi, Naganakulam, Madurai,
          Tamil Nadu 625014
        </p>
        <p>📞 (+91) 63691 98911</p>
        <ul style={{ listStyleType: "none", padding: 0, marginTop: "1rem" }}>
          <li>
            🕒 <strong>Monday - Sunday:</strong> 10:00 AM – 9:00 PM
          </li>
        </ul>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.6507183052327!2d78.13241367450804!3d9.962990373671559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c73ec42b4d9b%3A0x3f602ac0e0146e!2sR2%20Media!5e0!3m2!1sen!2sin!4v1757500127453!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0, borderRadius: "12px", marginTop: "1rem" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Section>
    </>
  );
};

export default LandingPage;

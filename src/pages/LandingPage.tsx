import AutoPaginatedTestimonials from "../components/AutoPaginatedTestimonials";
import EventsPage from "../pages/EventsPage";
import heroBg from "../assets/heroBg.webp";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import ParallaxGallery from "../components/ParallaxGallery/ParallaxGallery";
import NumberReveal from "../components/NumberReveal/NumberReveal";
import Section from "../components/Section";
import { AnimationType } from "../utils/animationHooks";

const LandingPage: React.FC = () => {
  return (
    <>
      <Section
        contentAnimation={AnimationType.TRANSLATE_Y}
        contentStyle={{
          transition: "transform 0.3s ease",
          zIndex: "1",
        }}
        className="section section-hero"
        backgroundImage={heroBg}
        backgroundStyle={{ inset: "-12%", backgroundPosition: "center" }}
        backgroundClassName="background"
        backgroundAnimation={AnimationType.SCALE_AND_TRANSLATE_Y}
        scrollOffset={["start start", "end start"]}
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
      <EventsPage />

      {/* <Section
        className="section"
        contentClassName="content-grid"
        contentAnimation={AnimationType.SCALE_AND_TRANSLATE_Y}
        scrollOffset={["start end", "end start"]}
      >
        <div className="card">
          <h2>General Dentistry</h2>
          <p>Cleanings, fillings, and routine checkups.</p>
        </div>
        <div className="card">
          <h2>Cosmetic Dentistry</h2>
          <p>Whitening, veneers, and smile makeovers.</p>
        </div>
        <div className="card">
          <h2>Emergency Services</h2>
          <p>Same-day appointments for dental emergencies.</p>
        </div>
      </Section> */}
      {/*       <Section
        className="section"
        style={{ background: "linear-gradient(180deg, #EDEDE9, #F0EFEF)" }}
        contentClassName="content-testimonial"
        contentAnimation={AnimationType.NONE}
        scrollOffset={["start end", "end start"]}
      >
        <AutoPaginatedTestimonials />
      </Section> */}
      {/*       <ParallaxGallery
        title="Our Works"
        description="A showcase of our recent projects and success stories."
        images={[
          { src: img1, alt: "Image 1", animationType: "img1Y" },
          { src: img2, alt: "Image 2", animationType: "img2Y" },
          { src: img3, alt: "Image 3", animationType: "img3Y" },
        ]}
      /> */}

      {/*       <NumberReveal
        title="Our Impact"
        stats={[
          { value: 10, label: "Years Serving the Community", suffix: "+" },
          { value: 5000, label: "Happy Patients", suffix: "+" },
          { value: 5, label: "Average Google Rating", suffix: "★" },
        ]}
        className="section"
      /> */}
      {/*       <Section
        className="section"
        contentClassName="content-callout"
        contentAnimation={AnimationType.ZOOM_IN}
        scrollOffset={["start end", "end start"]}
      >
        <h2 style={{ color: "white" }}>Ready to Smile Brighter?</h2>
        <p style={{ color: "whitesmoke" }}>
          Book your appointment online or call us today!
        </p>
        <button className="btn-primary">Book Now</button>
      </Section> */}
      <Section
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

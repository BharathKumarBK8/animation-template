import Section from "../components/Section";
import heroBg from "../assets/hero-bg.jpg";

const ThreeDShowcase: React.FC = () => {
  return (
    <>
      <Section
        className="section section-hero"
        content={{ className: "content-translateY" }}
        background={{
          image: heroBg,
          style: { inset: "-12%", backgroundPosition: "center" },
          className: "background",
        }}
      >
        <h1 style={{ color: "white" }}>3D Animation Showcase</h1>
        <p style={{ color: "whitesmoke" }}>
          Experience stunning 3D scroll effects in action.
        </p>
      </Section>

      <Section className="section" content={{ className: "content-grid" }}>
        <div className="card">
          <h2>Rotate Y 3D</h2>
          <p>Y-axis rotation with perspective depth.</p>
        </div>
        <div className="card">
          <h2>Cube Rotate</h2>
          <p>Multi-axis 3D cube rotation effect.</p>
        </div>
        <div className="card">
          <h2>Perspective Tilt</h2>
          <p>Tilted perspective with depth illusion.</p>
        </div>
      </Section>

      <Section
        className="section"
        style={{ background: "linear-gradient(180deg, #1a1a2e, #16213e)" }}
        content={{ className: "content-testimonial" }}
      >
        <h2 style={{ color: "white" }}>Depth Slide Effect</h2>
        <p style={{ color: "whitesmoke" }}>
          Content sliding from depth along the Z-axis with smooth opacity
          transition.
        </p>
      </Section>

      <Section className="section" content={{ className: "content-callout" }}>
        <h2 style={{ color: "white" }}>Twist 3D Animation</h2>
        <p style={{ color: "whitesmoke" }}>
          Twisting rotation combined with scale transformation.
        </p>
      </Section>

      <Section className="section" content={{ className: "content-center" }}>
        <h2>Floating 3D Effect</h2>
        <p>
          Gentle floating motion with subtle 3D rotation for a natural feel.
        </p>
      </Section>

      <Section
        className="section"
        content={{ className: "card", style: { background: "aliceblue" } }}
        background={{ className: "background" }}
      >
        <h2>Combined 3D Effects</h2>
        <p>
          Background parallax motion combined with content perspective tilt
          creates layered depth perception.
        </p>
      </Section>
    </>
  );
};

export default ThreeDShowcase;

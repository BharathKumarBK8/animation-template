import Section from "../components/Section";
import { AnimationType } from "../utils/animationHooks";
import heroBg from "../assets/hero-bg.jpg";

const ThreeDShowcase: React.FC = () => {
  return (
    <>
      <Section
        contentAnimation={AnimationType.ROTATE_X_3D}
        useWhileInView={true}
        once={false}
        contentClassName="content-translateY"
        className="section section-hero"
        backgroundImage={heroBg}
        backgroundStyle={{ inset: "-12%", backgroundPosition: "center" }}
        backgroundClassName="background"
        backgroundAnimation={AnimationType.PARALLAX_SLOW}
        scrollOffset={["start start", "end start"]}
      >
        <h1 style={{ color: "white" }}>3D Animation Showcase</h1>
        <p style={{ color: "whitesmoke" }}>
          Experience stunning 3D scroll effects in action.
        </p>
      </Section>

      <Section
        className="section"
        useWhileInView={true}
        once={false}
        contentClassName="content-grid"
        contentAnimation={AnimationType.FLIP_CARD}
        scrollOffset={["start end", "end start"]}
      >
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
        contentClassName="content-testimonial"
        contentAnimation={AnimationType.DEPTH_SLIDE}
        scrollOffset={["start end", "end start"]}
      >
        <h2 style={{ color: "white" }}>Depth Slide Effect</h2>
        <p style={{ color: "whitesmoke" }}>
          Content sliding from depth along the Z-axis with smooth opacity
          transition.
        </p>
      </Section>

      <Section
        className="section"
        contentClassName="content-callout"
        contentAnimation={AnimationType.TWIST_3D}
        scrollOffset={["start end", "end start"]}
      >
        <h2 style={{ color: "white" }}>Twist 3D Animation</h2>
        <p style={{ color: "whitesmoke" }}>
          Twisting rotation combined with scale transformation.
        </p>
      </Section>

      <Section
        className="section"
        contentClassName="content-center"
        contentAnimation={AnimationType.FLOATING_3D}
        scrollOffset={["start end", "end start"]}
      >
        <h2>Floating 3D Effect</h2>
        <p>
          Gentle floating motion with subtle 3D rotation for a natural feel.
        </p>
      </Section>

      <Section
        className="section"
        contentClassName="card"
        contentStyle={{ background: "aliceblue" }}
        useWhileInView={true}
        once={false}
        contentAnimation={AnimationType.PERSPECTIVE_TILT}
        backgroundAnimation={AnimationType.PARALLAX_FAST}
        backgroundClassName="background"
        scrollOffset={["start end", "end start"]}
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

import Section from "../components/Section";
import img1 from "../assets/img-1.jpg";
import img2 from "../assets/img-2.jpg";
import heroBg from "../assets/hero-bg.png";
import section1 from "../assets/section-1.jpg";
import section2 from "../assets/section-2.jpg";
import section3 from "../assets/section-3.jpg";

const SamplePage: React.FC = () => {
  return (
    <>
      <Section
        backgroundAnimationType="scaleAndTranslateY"
        contentAnimationType="opacity"
        className="section scale-section"
        backgroundClassName="background"
        backgroundImage={section1}
        backgroundScaleRange={[0.7, 1.3]}
        contentOpacityRange={[0.3, 1]}
      >
        <h2>Scale Background + Fade Content</h2>
        <p>Background scales while text fades in</p>
      </Section>

      <Section
        backgroundAnimationType="none"
        contentAnimationType="translateY"
        className="section translate-section"
        backgroundClassName="background"
        backgroundImage={section2}
        contentYRange={[-100, 0]}
      >
        <h2>Static Background + Moving Text</h2>
        <p>Text slides up while background stays still</p>
      </Section>

      <Section
        backgroundAnimationType="opacity"
        contentAnimationType="scale"
        className="section fade-section"
        backgroundClassName="background"
        backgroundImage={section3}
        backgroundOpacityRange={[0.2, 1]}
        contentScaleRange={[0.8, 1.2]}
      >
        <h2>Fade Background + Scale Text</h2>
        <p>Background fades in while text scales up</p>
      </Section>

      <Section
        backgroundAnimationType="zoom"
        contentAnimationType="translateY"
        className="section zoom-section"
        backgroundClassName="background"
        backgroundImage={img1}
        backgroundScaleRange={[1.2, 1]}
        backgroundOpacityRange={[0.5, 1]}
        contentYRange={[50, 0]}
        contentOpacityRange={[0, 1]}
      >
        <h2>Zoom Background + Slide Text</h2>
        <p>Background zooms out while text slides up</p>
      </Section>

      <Section
        backgroundAnimationType="rotate"
        contentAnimationType="opacity"
        className="section rotate-section"
        backgroundClassName="rotate-bg"
        contentClassName="rotate-content"
        backgroundImage={img2}
        scrollOffset={["start end", "end start"]} // ✅ Add this
        backgroundFromRotate={0} // ✅ Change to 0 (RotateSection default)
        backgroundToRotate={30} // ✅ This is rotateAmount
        backgroundRotateRange={[0, 0.5]} // ✅ This is rotateRange
        backgroundInputRange={[0, 1]} // ✅ This is opacityRange
        contentOpacityRange={[0, 1]} // ✅ Content opacity
      >
        <h2>Rotating Background + Fading Text</h2>
        <p>Background rotates while text fades in</p>
      </Section>
      <Section
        contentAnimationType="translateY"
        contentClassName="translateY-content"
        className="section hero"
        backgroundImage={heroBg}
        backgroundClassName="background"
        backgroundAnimationType="scaleAndTranslateY"
        scrollOffset={["start start", "end start"]}
        backgroundScaleRange={[1.2, 1]}
        backgroundYRange={[0, -100]}
        contentYRange={[0, -150]}
        contentInputRange={[0, 0.8]}
      >
        <h1>
          JOURNEY <span>THROUGH</span> STARS & PLANETS
        </h1>
      </Section>

      <Section
        className="section" // Same as ZoomSection's motion.section
        backgroundClassName="background" // Same as ZoomSection's motion.div
        backgroundAnimationType="zoom"
        contentClassName="card"
        scrollOffset={["start end", "end start"]}
        contentInputRange={[0, 1]}
        contentScaleRange={[1.2, 0.8]}
        contentOpacityRange={[0.5, 1]}
      >
        <h2>Zoom Animation</h2>
        <p>Custom zoom effect with configurable ranges.</p>
      </Section>

      <Section
        backgroundAnimationType="none"
        contentAnimationType="translateY"
        className="section contact-section"
        backgroundImage={section1}
        contentYRange={[30, 0]}
        contentOpacityRange={[0, 1]}
      >
        <h2>Contact Us</h2>
        <form>
          <input type="email" placeholder="Your email" />
          <button type="submit">Subscribe</button>
        </form>
      </Section>
    </>
  );
};

export default SamplePage;

import ParallaxGallery from "../components/ParallaxGallery";
import StaggeredReveal from "../components/StaggeredReveal";
import AlternatingSection from "../components/AlternatingSection";
import NumberReveal from "../components/NumberReveal";
import heroBg from "../assets/hero-bg.png";
import img1 from "../assets/img-1.jpg";
import img2 from "../assets/img-2.jpg";
import img3 from "../assets/img-3.jpg";
import section1 from "../assets/section-1.jpg";
import Section from "../components/Section";

const LandingPage: React.FC = () => {
  return (
    <>
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
        className="section"
        backgroundClassName="background"
        style={{
          position: "relative",
          overflow: "hidden",
        }}
        backgroundImage={img1}
        backgroundAnimationType="zoom"
        backgroundStyle={{
          position: "absolute",
          inset: 5,
          zIndex: -1,
          willChange: "transform",
          overflow: "hidden",
        }}
        contentClassName="card"
        contentAnimationType="zoom"
        scrollOffset={["start end", "end start"]}
        backgroundScaleRange={[1, 1.2]}
        backgroundOpacityRange={[0.5, 1]}
        backgroundInputRange={[0, 1]}
        contentInputRange={[0, 1]}
        contentScaleRange={[1.2, 0.6]}
        contentOpacityRange={[0.5, 1]}
      >
        <h2>Zoom Animation</h2>
        <p>Custom zoom effect with configurable ranges.</p>
      </Section>
      <Section
        backgroundAnimationType="rotate"
        contentAnimationType="opacity"
        className="section"
        style={{
          position: "relative",
          overflow: "hidden",
        }}
        backgroundClassName="background"
        backgroundStyle={{
          position: "absolute",
          inset: "-20%",
          zIndex: -1,
          willChange: "transform",
        }}
        contentStyle={{
          position: "relative",
          zIndex: 1,
        }}
        backgroundImage={img2}
        scrollOffset={["start end", "end start"]}
        backgroundFromRotate={0}
        backgroundToRotate={30}
        backgroundRotateRange={[0, 0.5]}
        backgroundInputRange={[0, 1]}
        contentOpacityRange={[0, 1]}
      >
        <h2>Rotating Background + Fading Text</h2>
        <p>Background rotates while text fades in</p>
      </Section>
      <Section
        className="section"
        backgroundClassName="background"
        style={{
          position: "relative",
          overflow: "hidden",
        }}
        backgroundImage={section1}
        backgroundAnimationType="scale"
        backgroundStyle={{
          position: "absolute",
          inset: 0,
          zIndex: -1,
          willChange: "transform",
        }}
        contentClassName="content"
        contentAnimationType="scale"
        scrollOffset={["start end", "end start"]}
        backgroundScaleRange={[1, 1.2]}
        backgroundInputRange={[0, 1]}
        contentInputRange={[0, 1]}
        contentScaleRange={[1, 0.8]}
      >
        <h2>Scaling Background + Content</h2>
        <p>Background scales up while content scales down</p>
      </Section>
      <AlternatingSection
        items={[
          {
            image: img1,
            title: "Mobile Planetarium Setup",
            description:
              "Experience the cosmos in our state-of-the-art mobile dome that brings the universe directly to your location with professional setup and immersive visuals.",
            reverse: false,
            hasScale: true,
            hasParallax: true,
          },
          {
            image: img2,
            title: "Educational Programs",
            description:
              "Curriculum-aligned astronomy content designed to inspire and educate students of all ages about space science with interactive learning experiences.",
            reverse: true,
            hasScale: true,
            hasParallax: true,
          },
          {
            image: img3,
            title: "Community Outreach",
            description:
              "Reaching remote communities and schools to make astronomy accessible to everyone, everywhere with our mobile planetarium services.",
            reverse: false,
            hasScale: true,
            hasParallax: true,
          },
        ]}
      />

      <Section
        className="section"
        backgroundClassName="background"
        contentClassName="card"
        backgroundImage={img2}
        backgroundAnimationType="zoom"
        contentAnimationType="translateYAndOpacity"
        contentYRange={[0, 0]}
        contentOpacityRange={[1, 1]}
      >
        <h1>Welcome to My Page</h1>
        <p>
          This is a normal section with a background image and animated content.
        </p>
      </Section>

      <StaggeredReveal
        title="Staggered Reveal"
        items={["Strategy", "Design", "Production", "Delivery"]}
      />
      <ParallaxGallery
        images={[
          { src: img1, alt: "Image 1", animationType: "img1Y" },
          { src: img2, alt: "Image 2", animationType: "img2Y" },
          { src: img3, alt: "Image 3", animationType: "img3Y" },
        ]}
      />
      <NumberReveal
        title="Our Achievements"
        stats={[
          { value: 1000, label: "Projects", suffix: "+" },
          { value: 50, label: "Countries" },
          { value: 99, label: "Success Rate", suffix: "%" },
          { value: 24, label: "Support", suffix: "/7" },
        ]}
      />
    </>
  );
};

export default LandingPage;

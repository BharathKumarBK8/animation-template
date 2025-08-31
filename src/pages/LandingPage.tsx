import HeroSection from "../components/HeroSection";
import RotateSection from "../components/RotateSection";
import ParallaxGallery from "../components/ParallaxGallery";
import StaggeredReveal from "../components/StaggeredReveal";
import AlternatingSection from "../components/AlternatingSection";
import img1 from "../assets/img-1.jpg";
import img2 from "../assets/img-2.jpg";
import img3 from "../assets/img-3.jpg";

const LandingPage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <RotateSection
        title="Explore the Universe"
        description="Discover new worlds as they spin into view"
      />
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
    </>
  );
};

export default LandingPage;

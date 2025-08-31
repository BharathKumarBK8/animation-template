import { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import { useHeroAnimations } from "../utils/animation";

const HeroSection: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const { bgScale, bgY, textY, textOpacity } =
    useHeroAnimations(scrollYProgress);

  return (
    <motion.section ref={ref} className="section hero">
      <motion.div className="hero-bg" style={{ scale: bgScale, y: bgY }} />
      <motion.h1 style={{ y: textY, opacity: textOpacity }}>
        JOURNEY <span>THROUGH</span> STARS & PLANETS
      </motion.h1>
    </motion.section>
  );
};

export default HeroSection;

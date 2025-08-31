import { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import { useDualEffectAnimations } from "../utils/animation";
import sectionImg1 from "../assets/section-1.jpg";
import sectionImg2 from "../assets/section-2.jpg";

const DualEffectSection: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const { imgZoomOut, imgRotateLeft } =
    useDualEffectAnimations(scrollYProgress);

  return (
    <motion.section ref={ref} className="section dual-effect-section">
      <motion.img
        src={sectionImg1}
        alt="Zoom out effect"
        className="zoom-out-img"
        style={{ scale: imgZoomOut }}
      />
      <motion.img
        src={sectionImg2}
        alt="Rotate effect"
        className="rotate-left-img"
        style={{ rotate: imgRotateLeft }}
      />
      <div className="dual-effect-content">
        <h2>Dual Motion</h2>
        <p>Experience zoom and rotation in harmony</p>
      </div>
    </motion.section>
  );
};

export default DualEffectSection;

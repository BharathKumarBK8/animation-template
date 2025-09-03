import { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import { useZoomAnimation, useRotateAnimation } from "../utils/animationHooks";
import sectionImg1 from "../assets/section-1.jpg";
import sectionImg2 from "../assets/section-2.jpg";

const DualEffectSection: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Apply individual reusable hooks
  const { scale: zoomScale } = useZoomAnimation(
    scrollYProgress,
    [0, 1], // input range
    [1.3, 1], // scale range (zoom out)
    [1, 1] // opacity stays fixed (optional)
  );

  const { rotateDeg: rotateLeft } = useRotateAnimation(
    scrollYProgress,
    0, // from rotation
    -90, // to rotation
    [0, 1], // rotate range
    1, // opacity stays 1
    1,
    [0, 1]
  );

  return (
    <motion.section ref={ref} className="section dual-effect-section">
      <motion.img
        src={sectionImg1}
        alt="Zoom out effect"
        className="zoom-out-img"
        style={{ scale: zoomScale }}
      />
      <motion.img
        src={sectionImg2}
        alt="Rotate effect"
        className="rotate-left-img"
        style={{ rotate: rotateLeft }}
      />
      <div className="dual-effect-content">
        <h2>Dual Motion</h2>
        <p>Experience zoom and rotation in harmony</p>
      </div>
    </motion.section>
  );
};

export default DualEffectSection;

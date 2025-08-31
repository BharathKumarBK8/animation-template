import { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import { useRotationAnimations } from "../utils/animation";

const RotationSection: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const { rotateDeg, rotateOpacity } = useRotationAnimations(scrollYProgress);

  return (
    <motion.section ref={ref} className="section">
      <motion.div
        className="card"
        style={{ rotate: rotateDeg, opacity: rotateOpacity }}
      >
        <h2>Rotation</h2>
        <p>Scroll driven rotation adds dynamic energy.</p>
      </motion.div>
    </motion.section>
  );
};

export default RotationSection;

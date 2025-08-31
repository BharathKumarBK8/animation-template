import { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import { useZoomInAnimations } from "../utils/animation";

const ZoomInSection: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const { zoomInScale, zoomInOpacity } = useZoomInAnimations(scrollYProgress);

  return (
    <motion.section ref={ref} className="section">
      <motion.div
        className="card"
        style={{ scale: zoomInScale, opacity: zoomInOpacity }}
      >
        <h2>Zoom In</h2>
        <p>As you scroll, the content grows into focus.</p>
      </motion.div>
    </motion.section>
  );
};

export default ZoomInSection;

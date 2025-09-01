import { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import { useRotateAnimation } from "../utils/animation";

interface RotateSectionProps {
  title: string;
  description: string;
  backgroundImage?: string;
  className?: string;
  rotateAmount: number;
  rotateRange: [number, number];
  opacityRange?: [number, number]; // Optional custom opacity range
}

const RotateSection: React.FC<RotateSectionProps> = ({
  title,
  description,
  backgroundImage,
  className = "section rotate-section",
  rotateAmount,
  rotateRange,
  opacityRange = [0, 1], // Default opacity range is from 0 to 1
}) => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const { rotateDeg, opacity } = useRotateAnimation(
    scrollYProgress,
    0, // Default fromRotate
    rotateAmount, // Custom toRotate from props
    rotateRange, // Custom rotate range from props
    0, // Default fromOpacity
    1, // Default toOpacity
    opacityRange // Custom opacity range from props
  );

  return (
    <motion.section ref={ref} className={className}>
      <motion.div
        className="rotate-bg"
        style={{
          rotate: rotateDeg, // Applying the rotating degree
          opacity: opacity, // Applying the opacity animation
          backgroundImage: backgroundImage
            ? `url(${backgroundImage})`
            : undefined, // Conditionally set background image
        }}
      />
      <motion.div
        className="rotate-content"
        style={{
          opacity: opacity, // Apply opacity to the content
        }}
      >
        <h2>{title}</h2>
        <p>{description}</p>
      </motion.div>
    </motion.section>
  );
};

export default RotateSection;

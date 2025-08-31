import { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import { useRotateAnimation } from "../utils/animation";

interface RotateSectionProps {
  title: string;
  description: string;
  backgroundImage?: string;
  className?: string;
}

const RotateSection: React.FC<RotateSectionProps> = ({
  title,
  description,
  backgroundImage,
  className = "section rotate-section",
}) => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const { rotateLeft } = useRotateAnimation(scrollYProgress);

  return (
    <motion.section ref={ref} className={className}>
      <motion.div
        className="rotate-bg"
        style={{
          rotate: rotateLeft,
          backgroundImage: backgroundImage
            ? `url(${backgroundImage})`
            : undefined,
        }}
      />
      <div className="rotate-content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </motion.section>
  );
};

export default RotateSection;

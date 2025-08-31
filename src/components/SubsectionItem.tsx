import { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import { useSubsectionAnimations } from "../utils/animation";

const SubsectionItem: React.FC<{
  image: string;
  title: string;
  description: string;
  reverse: boolean;
  hasScale: boolean;
  hasParallax: boolean;
}> = ({ image, title, description, reverse, hasScale, hasParallax }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const { y, opacity, scaleTransform, parallaxTransform } =
    useSubsectionAnimations(scrollYProgress);

  const imageStyle: any = {};
  if (hasScale) {
    imageStyle.scale = scaleTransform;
  }
  if (hasParallax) {
    imageStyle.y = parallaxTransform;
  }

  return (
    <motion.div
      ref={ref}
      className={`subsection ${reverse ? "reverse" : ""}`}
      style={{ y, opacity }}
    >
      <div className="subsection-image">
        <motion.img src={image} alt={title} style={imageStyle} />
      </div>
      <div className="subsection-content">
        <div className="content-overlay">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default SubsectionItem;

import { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import { useStaggeredRevealAnimations } from "../utils/animationHooks";

interface StaggeredRevealProps {
  title: string;
  items: string[];
  className?: string;
}

const StaggeredReveal: React.FC<StaggeredRevealProps> = ({
  title,
  items,
  className = "section",
}) => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  const {
    item1Opacity,
    item1Y,
    item2Opacity,
    item2Y,
    item3Opacity,
    item3Y,
    item4Opacity,
    item4Y,
  } = useStaggeredRevealAnimations(scrollYProgress);

  const animations = [
    { opacity: item1Opacity, y: item1Y },
    { opacity: item2Opacity, y: item2Y },
    { opacity: item3Opacity, y: item3Y },
    { opacity: item4Opacity, y: item4Y },
  ];

  return (
    <motion.section ref={ref} className={className}>
      <div className="content">
        <h2>{title}</h2>
        <div className="list">
          {items.map((item, index) => (
            <motion.div
              key={item}
              className="list-item"
              style={{
                opacity: animations[index]?.opacity || item1Opacity,
                y: animations[index]?.y || item1Y,
              }}
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default StaggeredReveal;

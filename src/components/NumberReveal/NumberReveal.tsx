import { useRef, useEffect, useState } from "react";
import { useScroll, motion, useMotionValue, useSpring } from "framer-motion";
import {
  useOpacity,
  useScale,
  useTranslateY,
} from "../../utils/animationHooks";
import "./NumberReveal.css";

interface NumberRevealProps {
  title?: string;
  stats: Array<{
    value: number;
    label: string;
    suffix?: string;
  }>;
  className?: string;
}

const NumberReveal: React.FC<NumberRevealProps> = ({
  title = "Our Impact",
  stats,
  className = "section",
}) => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  const opacity = useOpacity(scrollYProgress, [0, 0.3], [0, 1]);
  const y = useTranslateY(scrollYProgress, [0, 0.3], [30, 0]);
  const scale = useScale(scrollYProgress, [0, 0.3], [0.9, 1]);

  return (
    <motion.section ref={ref} className={className}>
      <motion.div className="card" style={{ opacity, y, scale }}>
        <h2>{title}</h2>
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <AnimatedNumber
              key={stat.label}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              delay={index * 0.1}
              scrollProgress={scrollYProgress}
            />
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

interface AnimatedNumberProps {
  value: number;
  label: string;
  suffix?: string;
  delay: number;
  scrollProgress: any;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  value,
  label,
  suffix = "",
  delay,
  scrollProgress,
}) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2000 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollProgress.onChange((latest: number) => {
      if (latest > 0.2 && !hasAnimated) {
        setHasAnimated(true);
        setTimeout(() => {
          motionValue.set(value);
        }, delay * 1000);
      }
    });

    return unsubscribe;
  }, [scrollProgress, value, delay, hasAnimated, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.onChange((latest) => {
      setDisplayValue(Math.round(latest));
    });

    return unsubscribe;
  }, [springValue]);

  return (
    <div className="stat-item">
      <div className="stat-number">
        {displayValue.toLocaleString()}
        {suffix}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
};

export default NumberReveal;

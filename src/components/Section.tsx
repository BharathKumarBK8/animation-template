import { useRef, ReactNode, CSSProperties } from "react";
import { useScroll, motion } from "framer-motion";
import { useScrollAnimation, AnimationType } from "../utils/animationHooks";

interface SectionProps {
  id?: string;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  backgroundAnimation?: AnimationType;
  contentAnimation?: AnimationType;
  backgroundClassName?: string;
  backgroundStyle?: CSSProperties;
  contentClassName?: string;
  contentStyle?: CSSProperties;
  backgroundImage?: string;
  backgroundElement?: ReactNode;
  scrollOffset?: any;
  useWhileInView?: boolean;
  once?: boolean;
}

const Section: React.FC<SectionProps> = ({
  id,
  children,
  backgroundAnimation = AnimationType.NONE,
  contentAnimation = AnimationType.NONE,
  className,
  style,
  backgroundClassName,
  backgroundStyle,
  contentClassName,
  contentStyle,
  backgroundImage,
  backgroundElement,
  scrollOffset,
  useWhileInView = false,
  once = true,
}) => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: scrollOffset,
  });

  const backgroundAnimationStyle = useScrollAnimation(
    backgroundAnimation,
    scrollYProgress
  );
  const contentAnimationStyle = useScrollAnimation(
    contentAnimation,
    scrollYProgress
  );

  const getWhileInViewVariants = (animationType: AnimationType) => {
    switch (animationType) {
      case AnimationType.FADE_IN:
        return { hidden: { opacity: 0 }, visible: { opacity: 1 } };
      case AnimationType.SLIDE_UP:
        return { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } };
      case AnimationType.SLIDE_DOWN:
        return {
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        };
      case AnimationType.ZOOM_IN:
        return {
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1 },
        };
      case AnimationType.ROTATE_X_3D:
        return {
          hidden: { opacity: 0, rotateX: 90, transformPerspective: 1000 },
          visible: { opacity: 1, rotateX: 0, transformPerspective: 1000 },
        };
      case AnimationType.ROTATE_Y_3D:
        return {
          hidden: { opacity: 0, rotateY: 90, transformPerspective: 1000 },
          visible: { opacity: 1, rotateY: 0, transformPerspective: 1000 },
        };
      case AnimationType.FLIP_CARD:
        return {
          hidden: { opacity: 0, rotateY: 180, transformPerspective: 1000 },
          visible: { opacity: 1, rotateY: 0, transformPerspective: 1000 },
        };
      case AnimationType.TWIST_3D:
        return {
          hidden: {
            opacity: 0,
            rotateZ: 180,
            scale: 0.5,
            transformPerspective: 800,
          },
          visible: {
            opacity: 1,
            rotateZ: 0,
            scale: 1,
            transformPerspective: 800,
          },
        };
      case AnimationType.FLOATING_3D:
        return {
          hidden: {
            opacity: 0,
            y: 20,
            rotateX: -10,
            scale: 0.9,
            transformPerspective: 600,
          },
          visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            scale: 1,
            transformPerspective: 600,
          },
        };
      case AnimationType.PERSPECTIVE_TILT:
        return {
          hidden: {
            opacity: 0,
            rotateX: 45,
            rotateY: 15,
            transformPerspective: 800,
          },
          visible: {
            opacity: 1,
            rotateX: 0,
            rotateY: 0,
            transformPerspective: 800,
          },
        };
      default:
        return { hidden: { opacity: 0 }, visible: { opacity: 1 } };
    }
  };

  return (
    <motion.section id={id} ref={ref} className={className} style={style}>
      {(backgroundClassName || backgroundImage || backgroundElement) && (
        <motion.div
          className={backgroundClassName}
          style={{
            ...backgroundStyle,
            ...(useWhileInView ? {} : backgroundAnimationStyle),
            backgroundImage: backgroundImage
              ? `url(${backgroundImage})`
              : undefined,
          }}
          {...(useWhileInView &&
            backgroundAnimation !== AnimationType.NONE && {
              variants: getWhileInViewVariants(backgroundAnimation),
              initial: "hidden",
              whileInView: "visible",
              viewport: { once },
              transition: { duration: 0.6, ease: "easeOut" },
            })}
        >
          {backgroundElement}
        </motion.div>
      )}

      <motion.div
        className={contentClassName}
        style={{
          ...contentStyle,
          ...(useWhileInView ? {} : contentAnimationStyle),
        }}
        {...(useWhileInView &&
          contentAnimation !== AnimationType.NONE && {
            variants: getWhileInViewVariants(contentAnimation),
            initial: "hidden",
            whileInView: "visible",
            viewport: { once },
            transition: { duration: 0.6, ease: "easeOut" },
          })}
      >
        {children}
      </motion.div>
    </motion.section>
  );
};

export default Section;

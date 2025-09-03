import { useRef, ReactNode, CSSProperties } from "react";
import { useScroll, motion } from "framer-motion";
import {
  useScale,
  useTranslateY,
  useOpacity,
  useZoomAnimation,
  useRotateAnimation,
} from "../utils/animationHooks";
import "./Section.css";

interface SectionProps {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  backgroundAnimationType?:
    | "scale"
    | "translateY"
    | "opacity"
    | "zoom"
    | "rotate"
    | "scaleAndTranslateY"
    | "translateYAndOpacity"
    | "none";
  backgroundClassName?: string;
  backgroundStyle?: CSSProperties;
  contentAnimationType?:
    | "scale"
    | "translateY"
    | "opacity"
    | "zoom"
    | "rotate"
    | "scaleAndTranslateY"
    | "translateYAndOpacity"
    | "none";
  contentClassName?: string;
  contentStyle?: CSSProperties;
  backgroundImage?: string;
  backgroundElement?: ReactNode;
  scrollOffset?: any;
  backgroundInputRange?: [number, number];
  contentInputRange?: [number, number];
  backgroundScaleRange?: [number, number];
  backgroundYRange?: [number, number];
  backgroundOpacityRange?: [number, number];
  backgroundRotateRange?: [number, number];
  backgroundFromRotate?: number;
  backgroundToRotate?: number;
  contentScaleRange?: [number, number];
  contentYRange?: [number, number];
  contentOpacityRange?: [number, number];
  contentRotateRange?: [number, number];
  contentFromRotate?: number;
  contentToRotate?: number;
}

const Section: React.FC<SectionProps> = ({
  children,
  backgroundAnimationType,
  contentAnimationType,
  className,
  style,
  backgroundClassName,
  backgroundStyle,
  contentClassName,
  contentStyle,
  backgroundImage,
  backgroundElement,
  scrollOffset,
  backgroundInputRange = [0, 1],
  contentInputRange = [0, 1],
  backgroundScaleRange = [1, 1],
  backgroundYRange = [0, 0],
  backgroundOpacityRange = [1, 1],
  backgroundRotateRange = [0, 0.3],
  backgroundFromRotate = 0,
  backgroundToRotate = 0,
  contentScaleRange = [1, 1],
  contentYRange = [0, 0],
  contentOpacityRange = [1, 1],
  contentRotateRange = [0, 0.3],
  contentFromRotate = 0,
  contentToRotate = 0,
}) => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: scrollOffset,
  });

  // Always call all hooks with default values
  const bgScale = useScale(
    scrollYProgress,
    backgroundInputRange,
    backgroundScaleRange
  );
  const bgY = useTranslateY(
    scrollYProgress,
    backgroundInputRange,
    backgroundYRange
  );
  const bgOpacity = useOpacity(
    scrollYProgress,
    backgroundInputRange,
    backgroundOpacityRange
  );
  const bgZoomAnimation = useZoomAnimation(
    scrollYProgress,
    backgroundInputRange,
    backgroundScaleRange,
    backgroundOpacityRange
  );
  const bgRotateAnimation = useRotateAnimation(
    scrollYProgress,
    backgroundFromRotate,
    backgroundToRotate,
    backgroundRotateRange,
    backgroundOpacityRange[0],
    backgroundOpacityRange[1],
    backgroundInputRange
  );

  const contentScale = useScale(
    scrollYProgress,
    contentInputRange,
    contentScaleRange
  );
  const contentY = useTranslateY(
    scrollYProgress,
    contentInputRange,
    contentYRange
  );
  const contentOpacity = useOpacity(
    scrollYProgress,
    contentInputRange,
    contentOpacityRange
  );
  const contentZoomAnimation = useZoomAnimation(
    scrollYProgress,
    contentInputRange,
    contentScaleRange,
    contentOpacityRange
  );
  const contentRotateAnimation = useRotateAnimation(
    scrollYProgress,
    contentFromRotate,
    contentToRotate,
    contentRotateRange,
    contentOpacityRange[0],
    contentOpacityRange[1],
    contentInputRange
  );

  const getBackgroundAnimationStyle = () => {
    switch (backgroundAnimationType) {
      case "scale":
        return { scale: bgScale };
      case "translateY":
        return { y: bgY };
      case "opacity":
        return { opacity: bgOpacity };
      case "zoom":
        return bgZoomAnimation;
      case "rotate":
        return {
          rotate: bgRotateAnimation.rotateDeg,
          opacity: bgRotateAnimation.opacity,
        };
      case "scaleAndTranslateY":
        return { scale: bgScale, y: bgY };
      case "translateYAndOpacity":
        return { y: bgY, opacity: bgOpacity };
      default:
        return {};
    }
  };

  const getContentAnimationStyle = () => {
    switch (contentAnimationType) {
      case "scale":
        return { scale: contentScale };
      case "translateY":
        return { y: contentY };
      case "opacity":
        return { opacity: contentOpacity };
      case "zoom":
        return contentZoomAnimation;
      case "rotate":
        return { opacity: contentRotateAnimation.opacity };
      case "scaleAndTranslateY":
        return { scale: contentScale, y: contentY };
      case "translateYAndOpacity":
        return { y: contentY, opacity: contentOpacity };
      default:
        return {};
    }
  };

  return (
    <motion.section ref={ref} className={className} style={style}>
      {/* Background Layer */}
      {(backgroundClassName || backgroundImage || backgroundElement) && (
        <motion.div
          className={backgroundClassName}
          style={{
            ...backgroundStyle,
            ...getBackgroundAnimationStyle(),
            backgroundImage: backgroundImage
              ? `url(${backgroundImage})`
              : undefined,
          }}
        >
          {backgroundElement}
        </motion.div>
      )}

      {/* Content Layer */}
      {contentClassName ? (
        <motion.div
          className={contentClassName}
          style={{
            ...contentStyle,
            ...getContentAnimationStyle(),
          }}
        >
          {children}
        </motion.div>
      ) : (
        <motion.div
          style={{
            ...contentStyle,
            ...getContentAnimationStyle(),
          }}
        >
          {children}
        </motion.div>
      )}
    </motion.section>
  );
};

export default Section;

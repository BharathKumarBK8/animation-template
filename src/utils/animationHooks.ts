import { useTransform, MotionValue } from "framer-motion";

/**
 * Generic scale transform hook
 */
export const useScale = (
  scrollYProgress: MotionValue<number>, // motion value from useScroll
  inputRange: [number, number], // scroll progress range [start, end]
  scaleRange: [number, number] // output scale range [min, max]
) => {
  return useTransform(scrollYProgress, inputRange, scaleRange);
};

/**
 * Generic Y-axis translation hook
 */
export const useTranslateY = (
  scrollYProgress: MotionValue<number>, // motion value from useScroll
  inputRange: [number, number], // scroll progress range [start, end]
  yRange: [number, number] // output translation range [fromY, toY]
) => {
  return useTransform(scrollYProgress, inputRange, yRange);
};

/**
 * Generic opacity transform hook
 */
export const useOpacity = (
  scrollYProgress: MotionValue<number>, // motion value from useScroll
  inputRange: [number, number], // scroll progress range [start, end]
  opacityRange: [number, number] // output opacity range [minOpacity, maxOpacity]
) => {
  return useTransform(scrollYProgress, inputRange, opacityRange);
};

/**
 * Zoom + fade animation hook
 */
export const useZoomAnimation = (
  scrollYProgress: MotionValue<number>, // motion value from useScroll
  inputRange: [number, number], // scroll progress range [start, end]
  scaleRange: [number, number], // output scale range [min, max]
  opacityRange: [number, number] // output opacity range [minOpacity, maxOpacity]
) => ({
  scale: useTransform(scrollYProgress, inputRange, scaleRange),
  opacity: useTransform(scrollYProgress, inputRange, opacityRange),
});

/**
 * Rotate + fade animation hook
 */
export const useRotateAnimation = (
  scrollYProgress: MotionValue<number>, // motion value from useScroll
  fromRotate = 0, // starting rotation in degrees
  toRotate = -45, // ending rotation in degrees
  rotateRange: [number, number] = [0, 0.3], // scroll range for rotation
  fromOpacity = 0, // starting opacity
  toOpacity = 1, // ending opacity
  opacityRange: [number, number] = [0, 1] // scroll range for opacity
) => ({
  rotateDeg: useTransform(scrollYProgress, rotateRange, [fromRotate, toRotate]),
  opacity: useTransform(scrollYProgress, opacityRange, [
    fromOpacity,
    toOpacity,
  ]),
});

export const useParallax = (
  scrollYProgress: MotionValue<number>, // Scroll progress from useScroll
  inputRange: number[] = [0, 0.5], // The scroll range we care about
  outputRange: number[] = [-30, 0] // The Y offset range (negative = upward shift)
) => {
  return useTransform(scrollYProgress, inputRange, outputRange);
};

export const useParallaxGalleryAnimations = (
  scrollYProgress: MotionValue<number>
) => ({
  img1Y: useTransform(scrollYProgress, [0, 1], [-80, 60]),
  img2Y: useTransform(scrollYProgress, [0, 1], [-40, 30]),
  img3Y: useTransform(scrollYProgress, [0, 1], [-10, 10]),
  imgZoom: useTransform(scrollYProgress, [0, 1], [1, 1.15]),
});

export const useSubsectionAnimations = (
  scrollYProgress: MotionValue<number>
) => ({
  y: useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -50]),
  opacity: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]),
  scaleTransform: useTransform(scrollYProgress, [0, 0.5], [1.2, 1]),
  parallaxTransform: useTransform(scrollYProgress, [0, 0.5], [-80, 0]),
});

export const useStaggeredRevealAnimations = (
  scrollYProgress: MotionValue<number>
) => ({
  item1Opacity: useTransform(scrollYProgress, [0, 0.25], [0, 1]),
  item1Y: useTransform(scrollYProgress, [0, 0.25], [40, 0]),
  item2Opacity: useTransform(scrollYProgress, [0.25, 0.5], [0, 1]),
  item2Y: useTransform(scrollYProgress, [0.25, 0.5], [40, 0]),
  item3Opacity: useTransform(scrollYProgress, [0.5, 0.75], [0, 1]),
  item3Y: useTransform(scrollYProgress, [0.5, 0.75], [40, 0]),
  item4Opacity: useTransform(scrollYProgress, [0.75, 1], [0, 1]),
  item4Y: useTransform(scrollYProgress, [0.75, 1], [40, 0]),
});

import { useTransform, MotionValue } from "framer-motion";

export const useHeroAnimations = (scrollYProgress: MotionValue<number>) => ({
  bgScale: useTransform(scrollYProgress, [0, 1], [1.2, 1]),
  bgY: useTransform(scrollYProgress, [0, 1], [0, -100]),
  textY: useTransform(scrollYProgress, [0, 1], [0, -150]),
  textOpacity: useTransform(scrollYProgress, [0, 0.8], [1, 0.3]),
});

export const useRotateAnimation = (scrollYProgress: MotionValue<number>) => ({
  rotateLeft: useTransform(scrollYProgress, [0, 0.3], [0, -45]),
});

export const useDualEffectAnimations = (
  scrollYProgress: MotionValue<number>
) => ({
  imgZoomOut: useTransform(scrollYProgress, [0, 1], [1.3, 1]),
  imgRotateLeft: useTransform(scrollYProgress, [0, 1], [0, -90]),
});

export const useZoomInAnimations = (scrollYProgress: MotionValue<number>) => ({
  zoomInScale: useTransform(scrollYProgress, [0, 1], [0.85, 1]),
  zoomInOpacity: useTransform(scrollYProgress, [0, 1], [0, 1]),
});

export const useRotationAnimations = (
  scrollYProgress: MotionValue<number>
) => ({
  rotateDeg: useTransform(scrollYProgress, [0, 1], [-10, 10]),
  rotateOpacity: useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]),
});

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
  parallaxTransform: useTransform(scrollYProgress, [0, 0.5], [-30, 0]),
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

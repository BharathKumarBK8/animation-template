import { useTransform, MotionValue } from "framer-motion";

export const useParallaxGalleryAnimations = (
  scrollYProgress: MotionValue<number>
) => ({
  img1Y: useTransform(scrollYProgress, [0, 1], [-80, 60]),
  img2Y: useTransform(scrollYProgress, [0, 1], [-40, 30]),
  img3Y: useTransform(scrollYProgress, [0, 1], [-10, 10]),
  imgZoom: useTransform(scrollYProgress, [0, 1], [1, 1.15]),
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

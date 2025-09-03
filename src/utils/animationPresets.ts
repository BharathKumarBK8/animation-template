import { MotionValue } from "framer-motion";
import {
  useScale,
  useTranslateY,
  useOpacity,
  useZoomAnimation,
  useRotateAnimation,
  useParallax,
} from "./animationHooks";

export const useFadeInUp = (scrollYProgress: MotionValue<number>) => ({
  opacity: useOpacity(scrollYProgress, [0, 0.5], [0, 1]),
  y: useTranslateY(scrollYProgress, [0, 0.5], [50, 0]),
});

export const useFadeInDown = (scrollYProgress: MotionValue<number>) => ({
  opacity: useOpacity(scrollYProgress, [0, 0.5], [0, 1]),
  y: useTranslateY(scrollYProgress, [0, 0.5], [-50, 0]),
});

export const useScaleIn = (scrollYProgress: MotionValue<number>) => ({
  scale: useScale(scrollYProgress, [0, 0.5], [0.8, 1]),
  opacity: useOpacity(scrollYProgress, [0, 0.5], [0, 1]),
});

export const useZoomOut = (scrollYProgress: MotionValue<number>) =>
  useZoomAnimation(scrollYProgress, [0, 1], [1, 1.2], [1, 0.8]);

export const useZoomIn = (scrollYProgress: MotionValue<number>) =>
  useZoomAnimation(scrollYProgress, [0, 1], [1.2, 1], [0.8, 1]);

export const useSlideInLeft = (scrollYProgress: MotionValue<number>) => ({
  x: useTranslateY(scrollYProgress, [0, 0.5], [-100, 0]),
  opacity: useOpacity(scrollYProgress, [0, 0.5], [0, 1]),
});

export const useSlideInRight = (scrollYProgress: MotionValue<number>) => ({
  x: useTranslateY(scrollYProgress, [0, 0.5], [100, 0]),
  opacity: useOpacity(scrollYProgress, [0, 0.5], [0, 1]),
});

export const useRotateIn = (scrollYProgress: MotionValue<number>) =>
  useRotateAnimation(scrollYProgress, -180, 0, [0, 0.5], 0, 1, [0, 0.5]);

export const useParallaxSlow = (scrollYProgress: MotionValue<number>) => ({
  y: useParallax(scrollYProgress, [0, 1], [-20, 20]),
});

export const useParallaxFast = (scrollYProgress: MotionValue<number>) => ({
  y: useParallax(scrollYProgress, [0, 1], [-50, 50]),
});

export const useHeroZoom = (scrollYProgress: MotionValue<number>) =>
  useZoomAnimation(scrollYProgress, [0, 1], [1, 1.1], [1, 0.9]);

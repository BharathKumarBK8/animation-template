import { useTransform, MotionValue } from "framer-motion";

export enum AnimationType {
  NONE = "none",
  SCALE = "scale",
  TRANSLATE_Y = "translateY",
  OPACITY = "opacity",
  ROTATE = "rotate",
  SCALE_AND_TRANSLATE_Y = "scaleAndTranslateY",
  TRANSLATE_Y_AND_OPACITY = "translateYandOpacity",
  FADE_IN = "fadeIn",
  FADE_OUT = "fadeOut",
  SLIDE_UP = "slideUp",
  SLIDE_DOWN = "slideDown",
  ZOOM_IN = "zoomIn",
  ZOOM_OUT = "zoomOut",
  PARALLAX_SLOW = "parallaxSlow",
  PARALLAX_FAST = "parallaxFast",
  ROTATE_FADE_IN = "rotateFadeIn",
  SCALE_FADE_IN = "scaleFadeIn",
  SLIDE_FADE_IN = "slideFadeIn",
  ZOOM_FADE_OUT = "zoomFadeOut",
  BOUNCE_IN = "bounceIn",
  ELASTIC_SCALE = "elasticScale",
  // 3D Effects
  ROTATE_X_3D = "rotateX3D",
  ROTATE_Y_3D = "rotateY3D",
  FLIP_CARD = "flipCard",
  CUBE_ROTATE = "cubeRotate",
  PERSPECTIVE_TILT = "perspectiveTilt",
  DEPTH_SLIDE = "depthSlide",
  FLOATING_3D = "floating3D",
  TWIST_3D = "twist3D",
}

export const useScrollAnimation = (
  type: AnimationType,
  scrollYProgress: MotionValue<number>
) => {
  // Existing transforms...
  const fadeInOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const fadeOutOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const slideUpY = useTransform(scrollYProgress, [0, 0.3], [50, 0]);
  const slideUpOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const slideDownY = useTransform(scrollYProgress, [0, 0.3], [-50, 0]);
  const slideDownOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const zoomInScale = useTransform(scrollYProgress, [0, 0.3], [0.8, 1]);
  const zoomInOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const zoomOutScale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const parallaxSlowY = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const parallaxFastY = useTransform(scrollYProgress, [0, 1], [-80, 80]);
  const rotateFadeRotate = useTransform(scrollYProgress, [0, 0.3], [-15, 0]);
  const rotateFadeOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const scaleFadeScale = useTransform(scrollYProgress, [0, 0.3], [1.2, 1]);
  const scaleFadeOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const slideFadeY = useTransform(scrollYProgress, [0, 0.3], [40, 0]);
  const slideFadeOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const zoomFadeOutScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const zoomFadeOutOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const bounceScale = useTransform(scrollYProgress, [0, 0.3], [0.3, 1]);
  const bounceY = useTransform(scrollYProgress, [0, 0.3], [100, 0]);
  const bounceOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const elasticScale = useTransform(scrollYProgress, [0, 0.3], [0.5, 1]);
  const basicScale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
  const basicTranslateY = useTransform(scrollYProgress, [0, 1], [40, 0]);
  const basicOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const basicRotate = useTransform(scrollYProgress, [0, 1], [-30, 0]);

  // 3D Effect transforms
  const rotateX3D = useTransform(scrollYProgress, [0, 0.5], [90, 0]);
  const rotateX3DOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  const rotateY3D = useTransform(scrollYProgress, [0, 0.5], [90, 0]);
  const rotateY3DOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  const flipCardRotateY = useTransform(scrollYProgress, [0, 0.5], [180, 0]);
  const flipCardOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  const cubeRotateX = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const cubeRotateY = useTransform(scrollYProgress, [0, 1], [0, 180]);

  const perspectiveTiltX = useTransform(scrollYProgress, [0, 0.5], [45, 0]);
  const perspectiveTiltY = useTransform(scrollYProgress, [0, 0.5], [15, 0]);
  const perspectiveOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  const depthSlideZ = useTransform(scrollYProgress, [0, 0.5], [-200, 0]);
  const depthSlideOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  const floatingY = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const floatingRotateX = useTransform(scrollYProgress, [0, 1], [0, 10]);
  const floatingScale = useTransform(scrollYProgress, [0, 0.3], [0.9, 1]);

  const twistRotateZ = useTransform(scrollYProgress, [0, 0.5], [180, 0]);
  const twistScale = useTransform(scrollYProgress, [0, 0.5], [0.5, 1]);
  const twistOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  const scaleAndTranslateY = {
    scale: basicScale,
    y: basicTranslateY,
  };

  const translateYAndOpacity = {
    y: basicTranslateY,
    opacity: basicOpacity,
  };

  switch (type) {
    case AnimationType.FADE_IN:
      return { opacity: fadeInOpacity };
    case AnimationType.FADE_OUT:
      return { opacity: fadeOutOpacity };
    case AnimationType.SLIDE_UP:
      return { y: slideUpY, opacity: slideUpOpacity };
    case AnimationType.SLIDE_DOWN:
      return { y: slideDownY, opacity: slideDownOpacity };
    case AnimationType.ZOOM_IN:
      return { scale: zoomInScale, opacity: zoomInOpacity };
    case AnimationType.ZOOM_OUT:
      return { scale: zoomOutScale };
    case AnimationType.PARALLAX_SLOW:
      return { y: parallaxSlowY };
    case AnimationType.PARALLAX_FAST:
      return { y: parallaxFastY };
    case AnimationType.ROTATE_FADE_IN:
      return { rotate: rotateFadeRotate, opacity: rotateFadeOpacity };
    case AnimationType.SCALE_FADE_IN:
      return { scale: scaleFadeScale, opacity: scaleFadeOpacity };
    case AnimationType.SLIDE_FADE_IN:
      return { y: slideFadeY, opacity: slideFadeOpacity };
    case AnimationType.ZOOM_FADE_OUT:
      return { scale: zoomFadeOutScale, opacity: zoomFadeOutOpacity };
    case AnimationType.BOUNCE_IN:
      return { scale: bounceScale, y: bounceY, opacity: bounceOpacity };
    case AnimationType.ELASTIC_SCALE:
      return { scale: elasticScale };
    case AnimationType.SCALE:
      return { scale: basicScale };
    case AnimationType.TRANSLATE_Y:
      return { y: basicTranslateY };
    case AnimationType.OPACITY:
      return { opacity: basicOpacity };
    case AnimationType.ROTATE:
      return { rotate: basicRotate };
    case AnimationType.SCALE_AND_TRANSLATE_Y:
      return scaleAndTranslateY;
    case AnimationType.TRANSLATE_Y_AND_OPACITY:
      return translateYAndOpacity;

    // 3D Effects
    case AnimationType.ROTATE_X_3D:
      return {
        rotateX: rotateX3D,
        opacity: rotateX3DOpacity,
        transformPerspective: 1000,
      };
    case AnimationType.ROTATE_Y_3D:
      return {
        rotateY: rotateY3D,
        opacity: rotateY3DOpacity,
        transformPerspective: 1000,
      };
    case AnimationType.FLIP_CARD:
      return {
        rotateY: flipCardRotateY,
        opacity: flipCardOpacity,
        transformPerspective: 1000,
      };
    case AnimationType.CUBE_ROTATE:
      return {
        rotateX: cubeRotateX,
        rotateY: cubeRotateY,
        transformPerspective: 1200,
      };
    case AnimationType.PERSPECTIVE_TILT:
      return {
        rotateX: perspectiveTiltX,
        rotateY: perspectiveTiltY,
        opacity: perspectiveOpacity,
        transformPerspective: 800,
      };
    case AnimationType.DEPTH_SLIDE:
      return {
        z: depthSlideZ,
        opacity: depthSlideOpacity,
        transformPerspective: 1000,
      };
    case AnimationType.FLOATING_3D:
      return {
        y: floatingY,
        rotateX: floatingRotateX,
        scale: floatingScale,
        transformPerspective: 600,
      };
    case AnimationType.TWIST_3D:
      return {
        rotateZ: twistRotateZ,
        scale: twistScale,
        opacity: twistOpacity,
        transformPerspective: 800,
      };

    case AnimationType.NONE:
    default:
      return {};
  }
};

// Keep existing specialized animations
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

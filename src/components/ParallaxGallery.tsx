import { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import { useParallaxGalleryAnimations } from "../utils/animation";
interface ParallaxGalleryProps {
  images: Array<{
    src: string;
    alt: string;
    animationType: "img1Y" | "img2Y" | "img3Y";
  }>;
  className?: string;
}

const ParallaxGallery: React.FC<ParallaxGalleryProps> = ({
  images,
  className = "section portfolio",
}) => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const { img1Y, img2Y, img3Y, imgZoom } =
    useParallaxGalleryAnimations(scrollYProgress);

  const getYTransform = (type: string) => {
    switch (type) {
      case "img1Y":
        return img1Y;
      case "img2Y":
        return img2Y;
      case "img3Y":
        return img3Y;
      default:
        return img1Y;
    }
  };

  return (
    <motion.section ref={ref} className={className}>
      {images.map((image, index) => (
        <motion.img
          key={index}
          src={image.src}
          alt={image.alt}
          style={{ y: getYTransform(image.animationType), scale: imgZoom }}
        />
      ))}
    </motion.section>
  );
};

export default ParallaxGallery;

import { useRef, ReactNode, CSSProperties } from "react";

interface SectionProps {
  className?: string;
  style?: CSSProperties;
  background?: {
    className?: string;
    style?: CSSProperties;
    image?: string;
    element?: ReactNode;
  };
  content?: {
    className?: string;
    style?: CSSProperties;
  };
  children?: ReactNode;
}

const Section: React.FC<SectionProps> = ({
  children,
  className,
  style,
  background = {},
  content = {},
}) => {
  const ref = useRef<HTMLElement>(null);

  const {
    className: backgroundClassName,
    style: backgroundStyle,
    image: backgroundImage,
    element: backgroundElement,
  } = background;

  const { className: contentClassName, style: contentStyle } = content;

  return (
    <section ref={ref} className={className} style={style}>
      {(backgroundClassName || backgroundImage || backgroundElement) && (
        <div
          className={backgroundClassName}
          style={{
            ...(backgroundImage
              ? { backgroundImage: `url(${backgroundImage})` }
              : {}),
            ...backgroundStyle,
          }}
        >
          {backgroundElement}
        </div>
      )}

      <div className={contentClassName} style={contentStyle}>
        {children}
      </div>
    </section>
  );
};

export default Section;

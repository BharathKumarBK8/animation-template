import { ReactNode, CSSProperties } from "react";

interface SectionProps {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  backgroundClassName?: string;
  backgroundStyle?: CSSProperties;
  contentClassName?: string;
  contentStyle?: CSSProperties;
  backgroundImage?: string;
  backgroundElement?: ReactNode;
}

const Section: React.FC<SectionProps> = ({
  children,
  className,
  style,
  backgroundClassName,
  backgroundStyle,
  contentClassName,
  contentStyle,
  backgroundImage,
  backgroundElement,
}) => {
  return (
    <section className={className} style={style}>
      {(backgroundClassName || backgroundImage || backgroundElement) && (
        <div
          className={backgroundClassName}
          style={{
            ...backgroundStyle,
            backgroundImage: backgroundImage
              ? `url(${backgroundImage})`
              : undefined,
          }}
        >
          {backgroundElement}
        </div>
      )}

      <div
        className={contentClassName}
        style={{
          ...contentStyle,
        }}
      >
        {children}
      </div>
    </section>
  );
};

export default Section;

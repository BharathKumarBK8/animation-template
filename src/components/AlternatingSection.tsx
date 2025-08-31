import SubsectionItem from "./SubsectionItem";

interface AlternatingSectionProps {
  items: Array<{
    image: string;
    title: string;
    description: string;
    reverse: boolean;
    hasScale: boolean;
    hasParallax: boolean;
  }>;
  className?: string;
}

const AlternatingSection: React.FC<AlternatingSectionProps> = ({
  items,
  className = "alternating-section",
}) => {
  return (
    <div className={className}>
      {items.map((item, index) => (
        <SubsectionItem
          key={index}
          image={item.image}
          title={item.title}
          description={item.description}
          reverse={item.reverse}
          hasScale={item.hasScale}
          hasParallax={item.hasParallax}
        />
      ))}
    </div>
  );
};

export default AlternatingSection;

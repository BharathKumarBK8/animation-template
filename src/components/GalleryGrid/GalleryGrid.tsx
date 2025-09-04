import React from "react";
import "./GalleryGrid.css";

interface GalleryItem {
  id: number;
  title: string;
  description: string;
  image: string;
  date?: string;
  category?: string;
}

interface GalleryGridProps {
  items: GalleryItem[];
  onItemClick?: (id: number) => void;
  columns?: number;
  showDate?: boolean;
  actionText?: string;
}

const GalleryGrid: React.FC<GalleryGridProps> = ({
  items,
  onItemClick,
  columns = 2,
  showDate = true,
  actionText = "Read More →",
}) => {
  const gridStyle = {
    gridTemplateColumns: `repeat(auto-fit, minmax(300px, 1fr))`,
  };

  return (
    <div className="gallery-grid" style={gridStyle}>
      {items.map((item) => (
        <div
          key={item.id}
          className="gallery-card"
          onClick={() => onItemClick?.(item.id)}
        >
          <img src={item.image} alt={item.title} />
          <div className="gallery-content">
            {showDate && item.date && (
              <div className="gallery-date">{item.date}</div>
            )}
            {item.category && (
              <div className="gallery-category">{item.category}</div>
            )}
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <div className="gallery-action">{actionText}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GalleryGrid;

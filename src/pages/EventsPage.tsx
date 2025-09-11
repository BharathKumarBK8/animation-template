import React, { useState } from "react";
import GalleryGrid, {
  GalleryItem,
} from "../components/GalleryGrid/GalleryGrid";
import ImageCarouselModal from "../components/ImageCarouselModal/ImageCarouselModal";
import event1 from "../assets/event1.jpg";
import event2 from "../assets/event2.jpg";
import section1 from "../assets/section1.jpg";
import section2 from "../assets/section2.jpg";
import section3 from "../assets/section3.jpg";

const EventsPage: React.FC = () => {
  const [selectedImages, setSelectedImages] = useState<string[] | null>(null);

  const eventItems: GalleryItem[] = [
    {
      id: 1,
      title: "Sample Event 1",
      description: "Sample Description 1",
      images: [event1, section1, section2],
      date: "Month Day, Year",
    },
    {
      id: 2,
      title: "Sample Event 2",
      description: "Sample Description 2",
      images: [event2, section2, section3],
      date: "Month Day, Year",
    },
  ];

  const handleCardClick = (id: number) => {
    const selectedPost = eventItems.find((post) => post.id === id);
    if (selectedPost) {
      setSelectedImages(selectedPost.images);
    }
  };

  const closeModal = () => {
    setSelectedImages(null);
  };

  return (
    <div className="section">
      <div style={{ maxWidth: "1200px", width: "100%" }}>
        <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>Our Works</h1>
        <p style={{ textAlign: "center", marginBottom: "3rem", opacity: 0.9 }}>
          Showcasing our expertise in event production, talent competitions, and
          documentary filmmaking. From dynamic live events to compelling
          storytelling, we bring your vision to life with creativity and
          professionalism.
        </p>

        <GalleryGrid
          items={eventItems}
          onItemClick={handleCardClick}
          showDate={true}
          actionText="Read More →"
        />

        {/* Carousel Modal */}
        {selectedImages && (
          <ImageCarouselModal images={selectedImages} onClose={closeModal} />
        )}
      </div>
    </div>
  );
};

export default EventsPage;

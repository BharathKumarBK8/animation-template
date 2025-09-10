import React, { useState } from "react";
import GalleryGrid, {
  GalleryItem,
} from "../components/GalleryGrid/GalleryGrid";
import ImageCarouselModal from "../components/ImageCarouselModal/ImageCarouselModal";
import event1 from "../assets/event1.jpg";
import event2 from "../assets/event2.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";

const BlogPage: React.FC = () => {
  const [selectedImages, setSelectedImages] = useState<string[] | null>(null);

  const blogPosts: GalleryItem[] = [
    {
      id: 1,
      title: "Sample Event 1",
      description: "Sample Description 1",
      images: [event1, img2, img3], // Multiple images
      date: "Month Day, Year",
    },
    {
      id: 2,
      title: "Sample Event 2",
      description: "Sample Description 2",
      images: [event2, img3], // Another set
      date: "Month Day, Year",
    },
  ];

  const handleCardClick = (id: number) => {
    const selectedPost = blogPosts.find((post) => post.id === id);
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
          items={blogPosts}
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

export default BlogPage;

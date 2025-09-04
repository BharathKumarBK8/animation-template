import React from "react";
import GalleryGrid from "../components/GalleryGrid/GalleryGrid";
import img1 from "../assets/img-1.jpg";
import img2 from "../assets/img-2.jpg";
import img3 from "../assets/img-3.jpg";
import sectionImg1 from "../assets/section-1.jpg";

const BlogPage: React.FC = () => {
  const handleCardClick = (id: number) => {
    console.log(`Clicked blog post ${id}`);
  };

  return (
    <div className="section">
      <div style={{ maxWidth: "1200px", width: "100%" }}>
        <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
          Cosmic Blog
        </h1>
        <p style={{ textAlign: "center", marginBottom: "3rem", opacity: 0.9 }}>
          Discover the latest news from the universe, educational insights, and
          behind-the-scenes stories from our mobile planetarium adventures.
        </p>

        <GalleryGrid
          items={[
            {
              id: 1,
              title: "The James Webb Space Telescope's Latest Discoveries",
              description:
                "Explore the groundbreaking images and data from humanity's most powerful space observatory.",
              image: img1,
              date: "March 15, 2025",
            },
            {
              id: 2,
              title: "How Mobile Planetariums Are Changing Education",
              description:
                "Discover how immersive astronomy experiences are revolutionizing STEM learning in schools.",
              image: img2,
              date: "March 10, 2025",
            },
            {
              id: 3,
              title: "Exploring Exoplanets: Worlds Beyond Our Solar System",
              description:
                "Journey to distant worlds and learn about the search for potentially habitable planets.",
              image: img3,
              date: "March 5, 2025",
            },
            {
              id: 4,
              title: "Community Impact: Bringing Stars to Rural Schools",
              description:
                "Stories from our outreach programs and the impact on underserved communities.",
              image: sectionImg1,
              date: "February 28, 2025",
            },
          ]}
          onItemClick={handleCardClick}
          showDate={true}
          actionText="Read More →"
        />
      </div>
    </div>
  );
};

export default BlogPage;

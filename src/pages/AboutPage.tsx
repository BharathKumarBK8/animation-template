import React from "react";
import Section from "../components/Section";
import StaggeredReveal from "../components/StaggeredReveal/StaggeredReveal";
import sampleDoctor from "../assets/sample-doctor.jpg";

const About: React.FC = () => {
  return (
    <div>
      <Section
        contentAnimationType="translateY"
        contentClassName="content-translateY"
        contentStyle={{
          alignItems: "end",
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
        className="section section-hero"
        backgroundImage={sampleDoctor}
        backgroundClassName="background"
        backgroundStyle={{ inset: "-10%", backgroundPosition: "center top" }}
        backgroundAnimationType="scaleAndTranslateY"
        scrollOffset={["start end", "end start"]}
        backgroundScaleRange={[1.2, 1]}
        backgroundYRange={[0, -100]}
        contentYRange={[0, -150]}
        contentInputRange={[0, 0.8]}
      >
        <h1 style={{ color: "white" }}>Meet Dr.Joe</h1>
        <p style={{ color: "whitesmoke" }}>
          Your trusted family dental care in the heart of the city.
        </p>
      </Section>

      {/* Biography Section */}
      <Section
        contentAnimationType="translateYAndOpacity"
        className="section"
        scrollOffset={["start end", "end start"]}
        contentClassName="card"
        contentInputRange={[0, 0.5]}
        contentYRange={[50, 0]}
        contentOpacityRange={[0, 1]}
      >
        <h2>About Dr. Joe</h2>
        <p>
          With over 15 years of experience in general and cosmetic dentistry,
          Dr. Joe is passionate about providing gentle, personalized care. He
          graduated from Harvard School of Dental Medicine and continues to stay
          ahead through ongoing education and modern technology.
        </p>
      </Section>

      {/* Mission Section */}
      <Section
        contentAnimationType="translateYAndOpacity"
        className="section"
        scrollOffset={["start end", "end start"]}
        contentClassName="card"
        contentInputRange={[0, 0.5]}
        contentYRange={[50, 0]}
        contentOpacityRange={[0, 1]}
      >
        <h2>Our Mission</h2>
        <p>
          At Dr. Joe’s Dental Clinic, our mission is simple: to make every visit
          a comfortable, caring, and positive experience. Whether it's a routine
          cleaning or a complete smile makeover, your health and happiness are
          our priorities.
        </p>
      </Section>

      <StaggeredReveal
        title="Why Patients Love Us"
        items={[
          "✅ Modern technology & digital x-rays",
          "✅ Comfortable, relaxing environment",
          "✅ Friendly and professional staff",
          "✅ Flexible appointment scheduling",
        ]}
      />
    </div>
  );
};

export default About;

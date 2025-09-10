import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./css/Content.css";
import "./css/Section.css";
import "./css/Background.css";
import Header from "./components/Header/Header";
import LandingPage from "./pages/LandingPage";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer/Footer";

const App: React.FC = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="App">
      <Header onNavigate={scrollToSection} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

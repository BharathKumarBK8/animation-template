import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./css/Content.css";
import "./css/Section.css";
import "./css/Background.css";
import Header from "./components/Header/Header";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import NotFound from "./pages/NotFound";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer/Footer";
import BookingsPage from "./pages/BookingsPage";
import Services from "./pages/Services";
import ThreeDShowcase from "./pages/Three3DShowcase";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/bookings" element={<BookingsPage />} />
        <Route path="*" element={<ThreeDShowcase />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

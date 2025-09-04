import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./css/Content.css";
import "./css/Section.css";
import "./css/Background.css";
import Header from "./components/Header/Header";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import NotFound from "./pages/NotFound";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer/Footer";
import BookingsPage from "./pages/BookingsPage";
import PartnershipsPage from "./pages/PartnershipPage";
import SamplePage from "./pages/SamplePage";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/bookings" element={<BookingsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/partnerships" element={<PartnershipsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

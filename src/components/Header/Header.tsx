import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.webp";
import "./Header.css";

const Header: React.FC = () => {
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [1, 0.8]);
  const headerY = useTransform(scrollY, [0, 100], [0, -10]);
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <motion.header
      className="header"
      style={{ opacity: headerOpacity, y: headerY }}
    >
      <div className="header-content">
        <div className="logo">
          <img
            src={logo}
            style={{ height: 100 }}
            alt="R2 Media Logo"
            onClick={handleLogoClick}
          />
        </div>
        <button
          className="hamburger"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)}>
            About
          </Link>
          <Link to="/services" onClick={() => setIsMenuOpen(false)}>
            Services
          </Link>
          <Link to="/bookings" onClick={() => setIsMenuOpen(false)}>
            Bookings
          </Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
            Contact
          </Link>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;

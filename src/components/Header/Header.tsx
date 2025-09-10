import React, { useState } from "react";
import logo from "../../assets/logo.webp";
import { motion, useScroll, useTransform } from "framer-motion";
import "./Header.css";

interface HeaderProps {
  onNavigate: (id: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [1, 0.8]);
  const headerY = useTransform(scrollY, [0, 100], [0, -10]);

  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigate = (id: string) => {
    setMenuOpen(false); // Close menu on navigation
    onNavigate(id);
  };

  return (
    <motion.header
      className="header"
      style={{
        opacity: headerOpacity,
        y: headerY,
      }}
    >
      <div className="header-content">
        <div className="logo">
          <img
            src={logo}
            style={{ height: 100, cursor: "pointer" }}
            alt="R2 Media Logo"
            onClick={() => handleNavigate("hero")}
          />
        </div>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <span onClick={() => handleNavigate("hero")}>Home</span>
          <span onClick={() => handleNavigate("services")}>Services</span>
          <span onClick={() => handleNavigate("works")}>Our Works</span>
          <span onClick={() => handleNavigate("contact")}>Contact Us</span>
        </nav>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;

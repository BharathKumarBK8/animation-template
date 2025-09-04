import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

const Header: React.FC = () => {
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [1, 0.8]);
  const headerY = useTransform(scrollY, [0, 100], [0, -10]);
  const navigate = useNavigate();

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
          <span onClick={handleLogoClick} style={{ cursor: "pointer" }}>
            Dr. Joe's
          </span>
        </div>
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/bookings">Bookings</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;

import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div>© 2025 Cosmos. All rights reserved.</div>
        <div className="social-links">
          <a
            href="https://instagram.com/cosmos"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-instagram"></i>
          </a>
          <a
            href="https://facebook.com/cosmos"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-facebook"></i>
          </a>
          <a
            href="https://youtube.com/cosmos"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-youtube"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

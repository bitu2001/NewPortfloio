import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="social-icon">
        <a href="https://www.instagram.com/tripathy.suvendu/" target="_blank">
          <i class="ri-instagram-line"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/suvendu-tripathy-07b6b5217"
          target="_blank"
        >
          <i class="ri-linkedin-line"></i>
        </a>
        <a href="https://github.com/bitu2001" target="_blank">
          <i class="ri-github-line"></i>
        </a>
      </div>
      <div className="line">
        <p>Made By Suvendu</p>
      </div>
    </div>
  );
};

export default Footer;

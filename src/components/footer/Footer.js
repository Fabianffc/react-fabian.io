import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-sns">
        <div className="design-by">Design By Fabian Fernandez</div>
        <div className="sns-links">
          <a href="https://www.linkedin.com/in/fabian-fernandez-126165161/" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin linkedin"></i>
          </a>
          <a href="https://github.com/Fabianffc" target="_blank" rel="noreferrer">
            <i className="fab fa-github twitter"></i>
          </a>
          <a href="../media/resume.pdf" target="_blank" rel="noreferrer">
          <i class="fas fa-file-pdf"></i>
          </a>

          
        </div>
      </div>
    </footer>
  );
};

export default Footer;

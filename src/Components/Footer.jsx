import './Footer.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer" data-aos="fade-up">
      <p data-aos="fade-up">
        © 2024 Tolulope Esther Akinwale. <br /> All rights reserved.
      </p>
      <div className="footer-links" data-aos="fade-up" >
        <a href="https://github.com/TEAtech-TBKs" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon" />
        </a>
        <a href="https://linkedin.com/in/tolulopeakinwale" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon" />
        </a>
        <a href="mailto:tolulopeakinwale955@example.com">
          <FaEnvelope className="icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;


import React from 'react';
import './About.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';

const About = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-left">
          <h3>Atul Aditya</h3>
          <p>Jalandhar, Punjab</p>
          <p>Samastipur, Bihar</p>
        </div>
        <div className="footer-contact">
          <p><strong>Phone:</strong> +91 80514 78577</p>
          <p><strong>Email:</strong> atuladitya05@gmail.com</p>
        </div>
        <div className="footer-button">
          <a href="/contact" className="footer-btn">Contact Me</a>
        </div>
      </div>

      <hr className="footer-divider" />

      <div className="footer-bottom">
        <div className="footer-social">
          <a href="https://facebook.com"><FaFacebookF /></a>
          <a href="https://twitter.com/AtulAditya14"><FaTwitter /></a>
          <a href="https://instagram.com/atuladityax"><FaInstagram /></a>
          <a href="https://github.com/atuladityax"><FaGithub /></a>
        </div>
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/portfolio">Portfolio</a>
          <a href="/blog">Blog</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default About;

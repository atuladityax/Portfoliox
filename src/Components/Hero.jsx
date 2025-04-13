import React from 'react';
import './Hero.css';
import profileImg from '../../src/atul-img.png'
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="text-content">
          <p className="intro">Hello , I'm</p>
          <h1 className="name">Atul Aditya</h1>
          <h2 className="role">Web Developer</h2>
          <div className="role-menu">
          <a href="/resume.pdf" className="download-resume" download>
            Download Resume
          </a>
          <a href="https://www.linkedin.com/in/atuladityax/"> <FaLinkedin /> </a>
          <a href="https://www.instagram.com/atuladityax/"> <FaInstagram /> </a>          
          <a href="https://x.com/AtulAditya14"> <FaXTwitter /> </a>
          <a href="https://github.com/atuladityax"> <FaGithub /> </a>
          </div>
          
        </div>
        <div className="image-content">
          <img src={profileImg} alt="Atul Aditya" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

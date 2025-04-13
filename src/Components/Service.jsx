import React from 'react';
import './Service.css';
import { FaCode, FaPalette, FaWordpress, FaCamera, FaInstagram, FaChartLine } from 'react-icons/fa';

const services = [
  {
    icon: <FaCode />,
    title: 'Web Development',
    description: 'Building responsive and scalable websites using modern technologies and best practices.',
    bg: '#EDEBFE',
    color: '#6C5CE7',
  },
  {
    icon: <FaPalette />,
    title: 'UI & UX Design',
    description: 'Designing intuitive interfaces that deliver seamless user experiences across all devices.',
    bg: '#FFF2E5',
    color: '#FD7E14',
  },
  {
    icon: <FaWordpress />,
    title: 'WordPress',
    description: 'Creating and customizing WordPress websites tailored to your business needs.',
    bg: '#E5F7FF',
    color: '#00A8E8',
  },
  {
    icon: <FaCamera />,
    title: 'Photograph',
    description: 'Capturing high-quality photos for events, products, and branding purposes.',
    bg: '#E7FAF1',
    color: '#2ECC71',
  },
  {
    icon: <FaInstagram />,
    title: 'Social Marketing',
    description: 'Helping brands grow their online presence through strategic social media campaigns and targeted engagement.',
    bg: '#FFE5F1',
    color: '#F368E0',
  },
  {
    icon: <FaChartLine />,
    title: 'Advertising',
    description: 'Helping your brand break through the noise with bold, targeted advertising strategies.',
    bg: '#FFFBE5',
    color: '#F1C40F',
  },
];

const Service = () => {
  return (
    <section className="services-section">
      <h2 className='head-title'> My Services</h2>
      <div className="services-grid"> 
        {services.map((service, index) => (
          <div className="service-card" key={index} style={{ backgroundColor: service.bg }}>
            <div className="service-icon" style={{ color: service.color }}>
              {service.icon}
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;

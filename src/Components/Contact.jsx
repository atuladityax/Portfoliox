import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section">
      <h2>Contact</h2>
      <div className="contact-form">
        <form>
          <div className="form-row">
            <input type="text" placeholder="Your Name:" required />
            <input type="tel" placeholder="Telephone:" />
          </div>
          <div className="form-row">
            <input type="email" placeholder="Email:" required />
            <input type="text" placeholder="Subject:" />
          </div>
          <div className="form-row full">
            <textarea placeholder="Message:" rows="5" required></textarea>
          </div>
          <div className="form-row full">
            <button type="submit">Send Message</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;

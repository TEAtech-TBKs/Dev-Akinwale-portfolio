import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import cv from '../assets/Esther Akinwale cv update(2).pdf';
import './contact.css';
import { FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_tsn4arc', 'template_x5s9uk2', formRef.current, 'U8yfpGdCrpZVPokQQ')
      .then(() => {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(() => {
        alert('Failed to send message, please try again later.');
      });
  };

  return (
    <div className="contact-form-container">
   
    <section className="contact-section" id="contact-section" data-aos="fade-up">
          <section className="contactUs">
      <div className='hireCTa'><h1 className='hireCTa-h1'>Hire </h1> <h1> Me</h1></div>
            <div className="contactUs-content">
              <h1>Let's Work Together</h1>
              <p>Interested in working together? Fill out the form to start a conversation about your project. I'll get back to you as soon as possible.</p> <br />
              <a href="mailto:tolulopeakinwale955@gmail.com"><span><FaEnvelope className='envelope'/>   </span>
                <span className='email-title'>Email: </span><br />
                tolulopeakinwale955@gmail.com
              </a> <br />
            <a className='cv-button' href={cv} title='Get To Know Dev Akin' rel='noopener' target='_blank'>View Cv</a>
            </div>
            <div className="direct-contact">
              <h4>Need immediate assistance ?</h4>
              <a href="https://wa.me/+2347035101578" target='_blank' rel='noopener'> <FaWhatsapp className='watsapp'/> Contact Me </a>
            </div>
          </section>
        <div className="form-section">
          <h2 data-aos="fade-down">Contact Me</h2>
          <form className="contact-form" onSubmit={handleSubmit} ref={formRef}>
            <label htmlFor="name" data-aos="fade-right">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              data-aos="fade-left"
            />
            <label htmlFor="email" data-aos="fade-right" data-aos-delay="100">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="message" data-aos="fade-right" data-aos-delay="200">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit" data-aos="zoom-in" data-aos-delay="300">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;

import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import './contact.css';

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
    <section className="contact-section" id="contact-section" data-aos="fade-up">
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
          data-aos="fade-left"
          data-aos-delay="100"
        />

        <label htmlFor="message" data-aos="fade-right" data-aos-delay="200">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          data-aos="fade-left"
          data-aos-delay="200"
        />

        <button type="submit" data-aos="zoom-in" data-aos-delay="300">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;

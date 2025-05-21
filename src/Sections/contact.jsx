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
    emailjs.sendForm('service_tsn4arc', 'template_x5s9uk2', formRef.current, 'U8yfpGdCrpZVPokQQ')
      .then(() => {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      }, () => {
        alert('Failed to send message, please try again later.');
      });
  };


  return (
    <section className="contact-section" id="contact-section">
      <h2>Contact Me</h2>
      <form className="contact-form" onSubmit={handleSubmit} ref={formRef}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" value={formData.message} onChange={handleChange} required />

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;


import React, { useState } from "react";
import "./ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-page-background">
    <div className="contact-container">
      <div className="contact-hero">
        <h1>Contact Us 🤝</h1>
        <p>We’d love to hear from you! Reach out with questions, feedback, or just to say hi.</p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          value={formData.email}
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="6"
          required
          value={formData.message}
          onChange={handleChange}
        />

        <button type="submit">Send Message</button>
      </form>
    </div>
    </div>
  );
};


export default ContactUs

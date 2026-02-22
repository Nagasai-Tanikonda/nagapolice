import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', description: '' });
  const [formError, setFormError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, description } = formData;

    if (!name || !email || !description) {
      setFormError('All fields are required.');
      return;
    }

    setFormError('');

    // Simulate sending email
    alert(`Email sent to nagasaithanikonda@gmail.com\nName: ${name}\nEmail: ${email}\nDescription: ${description}`);

    // Reset form
    setFormData({ name: '', email: '', description: '' });
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Let's Connect</h2>
      <p className="section-subtitle">Have a project in mind or want to collaborate? Feel free to reach out!</p>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Get In Touch</h3>
          <p>Email: <a href="mailto:nagasaithanikonda@gmail.com">nagasaithanikonda@gmail.com</a></p>
          <div className="social-icons">
            <a href="#" className="social-icon linkedin">LinkedIn</a>
            <a href="#" className="social-icon github">GitHub</a>
            <a href="#" className="social-icon twitter">Twitter</a>
          </div>
          <p className="availability">Always open to connect & collaborate on exciting projects.</p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            name="description"
            placeholder="Send a message to get started."
            value={formData.description}
            onChange={handleChange}
          ></textarea>
          {formError && <p className="form-error">{formError}</p>}
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </section>
  );
}
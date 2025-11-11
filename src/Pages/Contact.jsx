import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Save to localStorage
    const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
    const newSubmission = {
      ...formData,
      timestamp: new Date().toISOString(),
      id: Date.now()
    };
    localStorage.setItem('contactSubmissions', JSON.stringify([...submissions, newSubmission]));
    
    alert('Message sent successfully!');
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    // Hide success message after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="page-container">
      <div className="content-card">
        <h2>Contact Us</h2>
        <p>We'd love to hear from you! Send us a message.</p>
        
        {submitted && (
          <div className="success-message">
            ✅ Thank you! Your message has been sent successfully.
          </div>
        )}
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p>📧 Kathir@spendingorganizer.com</p>
            <p>📞 +91 9342527944</p>
            <p>📍 Skcet, coimbatore</p>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
            <textarea
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import './ContactUs.css';

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! We will get back to you soon.');
  };

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>We're here to help you find your perfect match</p>
        </div>
      </div>

      <div className="container">
        <div className="contact-container">
          <div className="contact-info-section">
            <h2>Get In Touch</h2>
            <p>Have questions? We'd love to hear from you.</p>

            <div className="contact-info-cards">
              <div className="info-card">
                <div className="icon"><FaPhone /></div>
                <h3>Phone</h3>
                <p>+91-XXXXXXXXXX</p>
                <p>Mon-Sat: 10 AM - 7 PM</p>
              </div>

              <div className="info-card">
                <div className="icon"><FaEnvelope /></div>
                <h3>Email</h3>
                <p>info@jpmatrimony.com</p>
                <p>support@jpmatrimony.com</p>
              </div>

              <div className="info-card">
                <div className="icon"><FaWhatsapp /></div>
                <h3>WhatsApp</h3>
                <p>+91-XXXXXXXXXX</p>
                <p>Quick responses</p>
              </div>

              <div className="info-card">
                <div className="icon"><FaMapMarkerAlt /></div>
                <h3>Address</h3>
                <p>123 Marriage Street</p>
                <p>Love City, LC 12345</p>
              </div>
            </div>
          </div>

          <div className="contact-form-section">
            <h2>Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label>Full Name *</label>
                <input type="text" required placeholder="Your name" />
              </div>

              <div className="form-group">
                <label>Email *</label>
                <input type="email" required placeholder="your@email.com" />
              </div>

              <div className="form-group">
                <label>Phone</label>
                <input type="tel" placeholder="+91-XXXXXXXXXX" />
              </div>

              <div className="form-group">
                <label>Subject *</label>
                <input type="text" required placeholder="How can we help?" />
              </div>

              <div className="form-group">
                <label>Message *</label>
                <textarea rows="5" required placeholder="Your message..."></textarea>
              </div>

              <button type="submit" className="btn-submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

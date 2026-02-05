import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaHeart, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-section">
              <div className="footer-logo">
                <FaHeart className="footer-logo-icon" />
                <span>JP Matrimony</span>
              </div>
              <p className="footer-description">
                A trusted matrimonial service helping people find their perfect life partner. 
                We are committed to providing a safe and reliable platform for marriage seekers.
              </p>
              <div className="social-links">
                <a href="#" aria-label="Facebook"><FaFacebook /></a>
                <a href="#" aria-label="Twitter"><FaTwitter /></a>
                <a href="#" aria-label="Instagram"><FaInstagram /></a>
                <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
              </div>
            </div>

            <div className="footer-section">
              <h3>Quick Links</h3>
              <ul className="footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/profiles">Browse Profiles</Link></li>
                <li><Link to="/search">Advanced Search</Link></li>
                <li><Link to="/membership">Membership Plans</Link></li>
                <li><Link to="/success-stories">Success Stories</Link></li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Support</h3>
              <ul className="footer-links">
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/help">Help Center</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
                <li><Link to="/terms">Terms & Conditions</Link></li>
                <li><Link to="/privacy">Privacy Policy</Link></li>
                <li><Link to="/safety">User Safety</Link></li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Contact Info</h3>
              <div className="contact-items">
                <div className="contact-item">
                  <FaMapMarkerAlt />
                  <span>123 Marriage Street, Love City, LC 12345</span>
                </div>
                <div className="contact-item">
                  <FaPhone />
                  <span>+91-XXXXXXXXXX</span>
                </div>
                <div className="contact-item">
                  <FaEnvelope />
                  <span>info@jpmatrimony.com</span>
                </div>
              </div>
              <div className="working-hours">
                <strong>Working Hours:</strong>
                <p>Mon - Sat: 10 AM - 7 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} JP Matrimony. All Rights Reserved.</p>
            <p className="footer-disclaimer">
              This website is strictly for matrimonial purposes only and not a dating website.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

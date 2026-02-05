import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { FaUser, FaHeart, FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="header-top">
        <div className="container">
          <div className="header-top-content">
            <div className="contact-info">
              <span>📞 +91-XXXXXXXXXX</span>
              <span>✉️ info@jpmatrimony.com</span>
            </div>
            <div className="header-actions">
              {isAuthenticated ? (
                <>
                  <span className="welcome-text">Welcome, {user?.name}</span>
                  <Link to="/my-profile" className="header-link">My Profile</Link>
                  <button onClick={handleLogout} className="header-link-btn">Logout</button>
                </>
              ) : (
                <>
                  <Link to="/login" className="header-link">Login</Link>
                  <Link to="/register" className="header-link register-btn">Register Free</Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="header-main">
        <div className="container">
          <div className="header-main-content">
            <Link to="/" className="logo">
              <FaHeart className="logo-icon" />
              <span className="logo-text">JP Matrimony</span>
            </Link>

            <button className="mobile-menu-toggle" onClick={toggleMenu}>
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>

            <nav className={`nav-menu ${menuOpen ? 'active' : ''}`}>
              <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
              <Link to="/profiles" onClick={() => setMenuOpen(false)}>Profiles</Link>
              <Link to="/search" onClick={() => setMenuOpen(false)}>
                <FaSearch /> Search
              </Link>
              <Link to="/membership" onClick={() => setMenuOpen(false)}>Membership</Link>
              <Link to="/success-stories" onClick={() => setMenuOpen(false)}>Success Stories</Link>
              <Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
              <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

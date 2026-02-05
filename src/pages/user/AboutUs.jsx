import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-page">
      <div className="about-hero">
        <div className="container">
          <h1>About JP Matrimony</h1>
          <p>Connecting Hearts, Creating Families</p>
        </div>
      </div>

      <div className="container">
        <div className="about-content">
          <div className="content-section">
            <h2>Our Story</h2>
            <p>
              JP Matrimony was founded with a simple yet powerful mission: to help people find their perfect life partner in a safe, 
              trustworthy, and efficient manner. Since our inception, we have been dedicated to bringing together individuals and 
              families who share similar values, interests, and life goals.
            </p>
            <p>
              With over 15 years of experience in the matrimonial industry, we understand the importance of finding the right match. 
              Our platform combines traditional values with modern technology to create a seamless and enjoyable matchmaking experience.
            </p>
          </div>

          <div className="content-section">
            <h2>Our Mission</h2>
            <p>
              To provide a safe, secure, and efficient platform where individuals can find their life partners. We are committed to 
              maintaining the highest standards of privacy, security, and authenticity in all our services.
            </p>
          </div>

          <div className="stats-section">
            <div className="stat-item">
              <div className="stat-number">50,000+</div>
              <div className="stat-label">Registered Members</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10,000+</div>
              <div className="stat-label">Happy Marriages</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-label">Years of Service</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Verified Profiles</div>
            </div>
          </div>

          <div className="content-section">
            <h2>Why Choose Us?</h2>
            <div className="features-grid">
              <div className="feature-item">
                <h3>Verified Profiles</h3>
                <p>All profiles are manually verified to ensure authenticity and eliminate fake profiles.</p>
              </div>
              <div className="feature-item">
                <h3>Privacy & Security</h3>
                <p>Your personal information is protected with industry-standard security measures.</p>
              </div>
              <div className="feature-item">
                <h3>Advanced Matching</h3>
                <p>Our advanced algorithm helps you find compatible matches based on your preferences.</p>
              </div>
              <div className="feature-item">
                <h3>24/7 Support</h3>
                <p>Our dedicated support team is always available to assist you in your journey.</p>
              </div>
              <div className="feature-item">
                <h3>Success Rate</h3>
                <p>Thousands of successful marriages prove our effectiveness in matchmaking.</p>
              </div>
              <div className="feature-item">
                <h3>Community Trust</h3>
                <p>Trusted by thousands of families across the country for over 15 years.</p>
              </div>
            </div>
          </div>

          <div className="content-section">
            <h2>Our Values</h2>
            <ul className="values-list">
              <li><strong>Trust:</strong> We prioritize building trust with our members through transparency and authenticity.</li>
              <li><strong>Privacy:</strong> Your personal information is sacred to us and is protected at all costs.</li>
              <li><strong>Respect:</strong> We respect the cultural, religious, and personal preferences of all our members.</li>
              <li><strong>Quality:</strong> We maintain high standards in profile verification and service delivery.</li>
              <li><strong>Support:</strong> We are committed to providing excellent support throughout your journey.</li>
            </ul>
          </div>

          <div className="content-section cta-section">
            <h2>Ready to Find Your Match?</h2>
            <p>Join thousands of happy couples who found love through JP Matrimony</p>
            <a href="/register" className="btn-cta">Register Now</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

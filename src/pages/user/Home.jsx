import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SearchFilter from '../../components/search/SearchFilter';
import ProfileCard from '../../components/profile/ProfileCard';
import { profileService } from '../../services/profileService';
import { FaCheckCircle, FaUsers, FaHeart, FaHeadset } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  const [featuredProfiles, setFeaturedProfiles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadFeaturedProfiles();
  }, []);

  const loadFeaturedProfiles = async () => {
    try {
      const response = await profileService.getProfiles({ featured: true, limit: 6 });
      setFeaturedProfiles(response.profiles || []);
    } catch (error) {
      console.error('Error loading profiles:', error);
      // Mock data for demo
      setFeaturedProfiles([
        { id: 1, name: 'Priya Sharma', age: 25, gender: 'female', height: "5'4\"", religion: 'Hindu', caste: 'Brahmin', location: 'Mumbai', education: "Bachelor's", profession: 'Software Engineer', verified: true },
        { id: 2, name: 'Rahul Kumar', age: 28, gender: 'male', height: "5'9\"", religion: 'Hindu', location: 'Delhi', education: "Master's", profession: 'Business Analyst', verified: true },
        { id: 3, name: 'Anjali Patel', age: 26, gender: 'female', height: "5'5\"", religion: 'Hindu', location: 'Bangalore', education: "Bachelor's", profession: 'Teacher', verified: false },
        { id: 4, name: 'Vikram Singh', age: 30, gender: 'male', height: "5'11\"", religion: 'Sikh', location: 'Chandigarh', education: "Bachelor's", profession: 'Doctor', verified: true },
        { id: 5, name: 'Neha Reddy', age: 24, gender: 'female', height: "5'3\"", religion: 'Hindu', location: 'Hyderabad', education: "Master's", profession: 'CA', verified: true },
        { id: 6, name: 'Arjun Mehta', age: 29, gender: 'male', height: "5'10\"", religion: 'Hindu', location: 'Pune', education: "Bachelor's", profession: 'Engineer', verified: false },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (filters) => {
    // Navigate to search results page with filters
    console.log('Search filters:', filters);
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="container">
            <h1 className="hero-title">Find Your Perfect Life Partner</h1>
            <p className="hero-subtitle">
              Trusted by thousands of families. Start your journey today.
            </p>
            <div className="hero-actions">
              <Link to="/register" className="btn-hero btn-primary">Register Free</Link>
              <Link to="/profiles" className="btn-hero btn-secondary">Browse Profiles</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="search-section">
        <div className="container">
          <h2 className="section-title">Find Your Match</h2>
          <SearchFilter onSearch={handleSearch} />
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Why Choose Us?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <FaCheckCircle />
              </div>
              <h3>Verified Profiles</h3>
              <p>All profiles are manually verified to ensure authenticity and safety.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <FaUsers />
              </div>
              <h3>Lakhs of Profiles</h3>
              <p>Browse through thousands of verified profiles to find your match.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <FaHeart />
              </div>
              <h3>Success Stories</h3>
              <p>Thousands of happy couples found their soulmates through us.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <FaHeadset />
              </div>
              <h3>24/7 Support</h3>
              <p>Our dedicated team is always here to help you in your journey.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Profiles Section */}
      <section className="featured-profiles-section">
        <div className="container">
          <h2 className="section-title">Featured Profiles</h2>
          {loading ? (
            <div className="loading">Loading profiles...</div>
          ) : (
            <div className="profiles-grid">
              {featuredProfiles.map(profile => (
                <ProfileCard key={profile.id} profile={profile} />
              ))}
            </div>
          )}
          <div className="section-action">
            <Link to="/profiles" className="btn-view-all">View All Profiles</Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">10,000+</div>
              <div className="stat-label">Happy Marriages</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50,000+</div>
              <div className="stat-label">Registered Users</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Verified Profiles</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-label">Years of Service</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Find Your Soulmate?</h2>
          <p>Join thousands of happy couples who found love through JP Matrimony</p>
          <Link to="/register" className="btn-cta">Get Started Now</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

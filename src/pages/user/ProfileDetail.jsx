import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { profileService } from '../../services/profileService';
import { getImageUrl } from '../../utils/helpers';
import { FaMapMarkerAlt, FaBriefcase, FaGraduationCap, FaUser, FaHeart, FaPhone, FaEnvelope, FaCheckCircle } from 'react-icons/fa';
import './ProfileDetail.css';

const ProfileDetail = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProfile();
  }, [id]);

  const loadProfile = async () => {
    try {
      const data = await profileService.getProfileById(id);
      setProfile(data);
    } catch (error) {
      console.error('Error loading profile:', error);
      // Mock data for demo
      setProfile({
        id: id,
        name: 'Priya Sharma',
        age: 25,
        gender: 'female',
        height: "5'4\"",
        weight: '55 kg',
        religion: 'Hindu',
        caste: 'Brahmin',
        motherTongue: 'Hindi',
        maritalStatus: 'Never Married',
        location: 'Mumbai, Maharashtra',
        education: "Bachelor's in Computer Science",
        profession: 'Software Engineer',
        income: '₹8-10 Lakhs',
        about: 'I am a software engineer working in a reputable IT company. I enjoy traveling, reading, and spending time with family. Looking for a caring and understanding life partner.',
        family: {
          fatherOccupation: 'Business',
          motherOccupation: 'Homemaker',
          siblings: '1 Brother',
          familyType: 'Joint Family',
          familyValues: 'Traditional',
        },
        photos: [
          'https://randomuser.me/api/portraits/women/4.jpg',
          'https://randomuser.me/api/portraits/women/5.jpg',
          'https://randomuser.me/api/portraits/women/6.jpg'
        ],
        verified: true,
        contactVisible: false,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleExpressInterest = () => {
    alert('Interest expressed! This would send a request to the profile owner.');
  };

  const handleContactRequest = async () => {
    try {
      await profileService.requestContact(id);
      alert('Contact request sent successfully!');
    } catch (error) {
      alert('Failed to send contact request. Please try again.');
    }
  };

  if (loading) return <div className="loading">Loading profile...</div>;
  if (!profile) return <div className="error">Profile not found</div>;

  return (
    <div className="profile-detail-page">
      <div className="container">
        <Link to="/profiles" className="back-link">← Back to Profiles</Link>

        <div className="profile-detail-container">
          <div className="profile-main">
            <div className="profile-header-section">
              <div className="profile-image-gallery">
                <div className="main-image">
                  <img src={getImageUrl(profile.photos?.[0], profile.name)} alt={profile.name} />
                  {profile.verified && (
                    <div className="verified-badge">
                      <FaCheckCircle /> Verified Profile
                    </div>
                  )}
                </div>
                {profile.photos?.length > 1 && (
                  <div className="image-thumbnails">
                    {profile.photos.slice(1).map((photo, index) => (
                      <img key={index} src={photo} alt={`${profile.name} ${index + 2}`} />
                    ))}
                  </div>
                )}
              </div>

              <div className="profile-header-info">
                <h1>{profile.name}</h1>
                <div className="profile-basic-info">
                  <div className="info-item">
                    <FaUser />
                    <span>{profile.age} years, {profile.height}</span>
                  </div>
                  <div className="info-item">
                    <FaMapMarkerAlt />
                    <span>{profile.location}</span>
                  </div>
                  <div className="info-item">
                    <FaGraduationCap />
                    <span>{profile.education}</span>
                  </div>
                  <div className="info-item">
                    <FaBriefcase />
                    <span>{profile.profession}</span>
                  </div>
                </div>

                <div className="profile-actions">
                  <button onClick={handleExpressInterest} className="btn-interest">
                    <FaHeart /> Express Interest
                  </button>
                  <button onClick={handleContactRequest} className="btn-contact">
                    <FaPhone /> Request Contact
                  </button>
                </div>
              </div>
            </div>

            <div className="profile-sections">
              <div className="profile-section">
                <h2>About Me</h2>
                <p>{profile.about}</p>
              </div>

              <div className="profile-section">
                <h2>Basic Information</h2>
                <div className="info-grid">
                  <div className="info-row">
                    <span className="label">Age:</span>
                    <span className="value">{profile.age} years</span>
                  </div>
                  <div className="info-row">
                    <span className="label">Height:</span>
                    <span className="value">{profile.height}</span>
                  </div>
                  <div className="info-row">
                    <span className="label">Weight:</span>
                    <span className="value">{profile.weight}</span>
                  </div>
                  <div className="info-row">
                    <span className="label">Marital Status:</span>
                    <span className="value">{profile.maritalStatus}</span>
                  </div>
                  <div className="info-row">
                    <span className="label">Mother Tongue:</span>
                    <span className="value">{profile.motherTongue}</span>
                  </div>
                </div>
              </div>

              <div className="profile-section">
                <h2>Religious Background</h2>
                <div className="info-grid">
                  <div className="info-row">
                    <span className="label">Religion:</span>
                    <span className="value">{profile.religion}</span>
                  </div>
                  <div className="info-row">
                    <span className="label">Caste:</span>
                    <span className="value">{profile.caste}</span>
                  </div>
                </div>
              </div>

              <div className="profile-section">
                <h2>Education & Career</h2>
                <div className="info-grid">
                  <div className="info-row">
                    <span className="label">Education:</span>
                    <span className="value">{profile.education}</span>
                  </div>
                  <div className="info-row">
                    <span className="label">Profession:</span>
                    <span className="value">{profile.profession}</span>
                  </div>
                  <div className="info-row">
                    <span className="label">Annual Income:</span>
                    <span className="value">{profile.income}</span>
                  </div>
                </div>
              </div>

              <div className="profile-section">
                <h2>Family Details</h2>
                <div className="info-grid">
                  <div className="info-row">
                    <span className="label">Father's Occupation:</span>
                    <span className="value">{profile.family.fatherOccupation}</span>
                  </div>
                  <div className="info-row">
                    <span className="label">Mother's Occupation:</span>
                    <span className="value">{profile.family.motherOccupation}</span>
                  </div>
                  <div className="info-row">
                    <span className="label">Siblings:</span>
                    <span className="value">{profile.family.siblings}</span>
                  </div>
                  <div className="info-row">
                    <span className="label">Family Type:</span>
                    <span className="value">{profile.family.familyType}</span>
                  </div>
                  <div className="info-row">
                    <span className="label">Family Values:</span>
                    <span className="value">{profile.family.familyValues}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="profile-sidebar">
            <div className="sidebar-card">
              <h3>Contact Information</h3>
              {profile.contactVisible ? (
                <div className="contact-info">
                  <div className="contact-item">
                    <FaPhone />
                    <span>+91-XXXXXXXXXX</span>
                  </div>
                  <div className="contact-item">
                    <FaEnvelope />
                    <span>contact@example.com</span>
                  </div>
                </div>
              ) : (
                <div className="contact-locked">
                  <p>Contact details are hidden. Request access to view.</p>
                  <button onClick={handleContactRequest} className="btn-request">
                    Request Contact
                  </button>
                </div>
              )}
            </div>

            <div className="sidebar-card">
              <h3>Report Profile</h3>
              <p>Found something inappropriate?</p>
              <Link to="/report" className="btn-report">Report This Profile</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetail;

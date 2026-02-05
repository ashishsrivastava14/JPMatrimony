import { Link } from 'react-router-dom';
import { FaUser, FaMapMarkerAlt, FaBriefcase, FaGraduationCap, FaHeart, FaCheckCircle } from 'react-icons/fa';
import { getImageUrl } from '../../utils/helpers';
import './ProfileCard.css';

const ProfileCard = ({ profile }) => {
  const { id, name, age, gender, height, religion, caste, location, education, profession, photo, verified } = profile;

  return (
    <div className="profile-card">
      <Link to={`/profiles/${id}`} className="profile-card-link">
        <div className="profile-card-image">
          <img src={getImageUrl(photo, name)} alt={name} />
          {verified && (
            <div className="verified-badge">
              <FaCheckCircle /> Verified
            </div>
          )}
        </div>
        
        <div className="profile-card-body">
          <h3 className="profile-name">{name}</h3>
          
          <div className="profile-details">
            <div className="profile-detail-item">
              <FaUser />
              <span>{age} years, {height}</span>
            </div>
            
            {religion && (
              <div className="profile-detail-item">
                <span>{religion}{caste ? `, ${caste}` : ''}</span>
              </div>
            )}
            
            {location && (
              <div className="profile-detail-item">
                <FaMapMarkerAlt />
                <span>{location}</span>
              </div>
            )}
            
            {education && (
              <div className="profile-detail-item">
                <FaGraduationCap />
                <span>{education}</span>
              </div>
            )}
            
            {profession && (
              <div className="profile-detail-item">
                <FaBriefcase />
                <span>{profession}</span>
              </div>
            )}
          </div>
          
          <div className="profile-card-actions">
            <button className="btn-view">View Profile</button>
            <button className="btn-interest">
              <FaHeart /> Express Interest
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProfileCard;

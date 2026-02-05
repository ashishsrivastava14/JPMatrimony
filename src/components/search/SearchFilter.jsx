import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import './SearchFilter.css';

const SearchFilter = ({ onSearch }) => {
  const [filters, setFilters] = useState({
    gender: '',
    ageFrom: '',
    ageTo: '',
    religion: '',
    caste: '',
    education: '',
    profession: '',
    location: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(filters);
  };

  const handleReset = () => {
    const resetFilters = {
      gender: '',
      ageFrom: '',
      ageTo: '',
      religion: '',
      caste: '',
      education: '',
      profession: '',
      location: '',
    };
    setFilters(resetFilters);
    onSearch(resetFilters);
  };

  return (
    <div className="search-filter">
      <form onSubmit={handleSubmit} className="filter-form">
        <div className="filter-grid">
          <div className="filter-item">
            <label>Looking For</label>
            <select name="gender" value={filters.gender} onChange={handleChange}>
              <option value="">Select</option>
              <option value="male">Groom</option>
              <option value="female">Bride</option>
            </select>
          </div>

          <div className="filter-item">
            <label>Age From</label>
            <select name="ageFrom" value={filters.ageFrom} onChange={handleChange}>
              <option value="">Select</option>
              {Array.from({ length: 43 }, (_, i) => i + 18).map(age => (
                <option key={age} value={age}>{age}</option>
              ))}
            </select>
          </div>

          <div className="filter-item">
            <label>Age To</label>
            <select name="ageTo" value={filters.ageTo} onChange={handleChange}>
              <option value="">Select</option>
              {Array.from({ length: 43 }, (_, i) => i + 18).map(age => (
                <option key={age} value={age}>{age}</option>
              ))}
            </select>
          </div>

          <div className="filter-item">
            <label>Religion</label>
            <select name="religion" value={filters.religion} onChange={handleChange}>
              <option value="">Select</option>
              <option value="Hindu">Hindu</option>
              <option value="Muslim">Muslim</option>
              <option value="Christian">Christian</option>
              <option value="Sikh">Sikh</option>
              <option value="Buddhist">Buddhist</option>
              <option value="Jain">Jain</option>
              <option value="Others">Others</option>
            </select>
          </div>

          <div className="filter-item">
            <label>Caste</label>
            <input
              type="text"
              name="caste"
              value={filters.caste}
              onChange={handleChange}
              placeholder="Enter caste"
            />
          </div>

          <div className="filter-item">
            <label>Education</label>
            <select name="education" value={filters.education} onChange={handleChange}>
              <option value="">Select</option>
              <option value="High School">High School</option>
              <option value="Diploma">Diploma</option>
              <option value="Bachelor">Bachelor's Degree</option>
              <option value="Master">Master's Degree</option>
              <option value="PhD">PhD</option>
            </select>
          </div>

          <div className="filter-item">
            <label>Profession</label>
            <input
              type="text"
              name="profession"
              value={filters.profession}
              onChange={handleChange}
              placeholder="Enter profession"
            />
          </div>

          <div className="filter-item">
            <label>Location</label>
            <input
              type="text"
              name="location"
              value={filters.location}
              onChange={handleChange}
              placeholder="City or State"
            />
          </div>
        </div>

        <div className="filter-actions">
          <button type="submit" className="btn-search">
            <FaSearch /> Search
          </button>
          <button type="button" onClick={handleReset} className="btn-reset">
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchFilter;

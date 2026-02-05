import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProfileCard from '../../components/profile/ProfileCard';
import SearchFilter from '../../components/search/SearchFilter';
import { profileService } from '../../services/profileService';
import './ProfileListing.css';

const ProfileListing = () => {
  const [searchParams] = useSearchParams();
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    loadProfiles();
  }, [currentPage, filters]);

  const loadProfiles = async () => {
    setLoading(true);
    try {
      const response = await profileService.getProfiles({
        ...filters,
        page: currentPage,
        limit: 12,
      });
      setProfiles(response.profiles || []);
      setTotalCount(response.total || 0);
    } catch (error) {
      console.error('Error loading profiles:', error);
      // Mock data
      setProfiles(Array.from({ length: 12 }, (_, i) => ({
        id: i + 1,
        name: `Profile ${i + 1}`,
        age: 22 + i,
        gender: i % 2 === 0 ? 'female' : 'male',
        height: i % 2 === 0 ? "5'4\"" : "5'9\"",
        religion: 'Hindu',
        location: 'Mumbai',
        education: "Bachelor's",
        profession: 'Professional',
        verified: i % 3 === 0,
      })));
      setTotalCount(50);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (searchFilters) => {
    setFilters(searchFilters);
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(totalCount / 12);

  return (
    <div className="profile-listing-page">
      <div className="container">
        <div className="page-header">
          <h1>Browse Profiles</h1>
          <p>Find your perfect match from thousands of verified profiles</p>
        </div>

        <SearchFilter onSearch={handleSearch} />

        <div className="listing-header">
          <div className="result-count">
            Showing {profiles.length} of {totalCount} profiles
          </div>
          <div className="sort-options">
            <label>Sort by:</label>
            <select>
              <option>Recently Added</option>
              <option>Age: Low to High</option>
              <option>Age: High to Low</option>
            </select>
          </div>
        </div>

        {loading ? (
          <div className="loading">Loading profiles...</div>
        ) : profiles.length > 0 ? (
          <>
            <div className="profiles-grid">
              {profiles.map(profile => (
                <ProfileCard key={profile.id} profile={profile} />
              ))}
            </div>

            {totalPages > 1 && (
              <div className="pagination">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                  className="pagination-btn"
                >
                  Previous
                </button>
                <div className="pagination-numbers">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`pagination-number ${currentPage === page ? 'active' : ''}`}
                    >
                      {page}
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                  className="pagination-btn"
                >
                  Next
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="no-results">
            <h3>No profiles found</h3>
            <p>Try adjusting your search filters</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileListing;

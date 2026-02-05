import { useState } from 'react';
import SearchFilter from '../../components/search/SearchFilter';
import ProfileCard from '../../components/profile/ProfileCard';
import './Search.css';

const Search = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searching, setSearching] = useState(false);
  const [searched, setSearched] = useState(false);

  const handleSearch = async (filters) => {
    setSearching(true);
    setSearched(true);

    try {
      // API call would go here
      setTimeout(() => {
        const mockResults = Array.from({ length: 6 }, (_, i) => ({
          id: i + 1,
          name: `Match ${i + 1}`,
          age: 24 + i,
          gender: i % 2 === 0 ? 'female' : 'male',
          height: i % 2 === 0 ? "5'5\"" : "5'10\"",
          religion: 'Hindu',
          location: 'Mumbai',
          education: "Master's",
          profession: 'Engineer',
          photo: i % 2 === 0
            ? `https://randomuser.me/api/portraits/women/${(i % 10) + 20}.jpg`
            : `https://randomuser.me/api/portraits/men/${(i % 10) + 20}.jpg`,
          verified: i % 2 === 0,
        }));
        setSearchResults(mockResults);
        setSearching(false);
      }, 1000);
    } catch (error) {
      console.error('Search error:', error);
      setSearching(false);
    }
  };

  return (
    <div className="search-page">
      <div className="container">
        <div className="page-header">
          <h1>Advanced Search</h1>
          <p>Find your perfect match with detailed search filters</p>
        </div>

        <SearchFilter onSearch={handleSearch} />

        {searching && (
          <div className="searching">
            <div className="spinner"></div>
            <p>Searching for matches...</p>
          </div>
        )}

        {!searching && searched && (
          <div className="search-results">
            <h2>Search Results ({searchResults.length})</h2>
            {searchResults.length > 0 ? (
              <div className="profiles-grid">
                {searchResults.map(profile => (
                  <ProfileCard key={profile.id} profile={profile} />
                ))}
              </div>
            ) : (
              <div className="no-results">
                <h3>No matches found</h3>
                <p>Try adjusting your search criteria</p>
              </div>
            )}
          </div>
        )}

        {!searched && (
          <div className="search-tips">
            <h2>Search Tips</h2>
            <div className="tips-grid">
              <div className="tip-card">
                <h3>🎯 Be Specific</h3>
                <p>Use multiple filters to narrow down your search</p>
              </div>
              <div className="tip-card">
                <h3>🔍 Try Different Combinations</h3>
                <p>Experiment with various filter combinations</p>
              </div>
              <div className="tip-card">
                <h3>💡 Keep An Open Mind</h3>
                <p>Sometimes the perfect match is unexpected</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;

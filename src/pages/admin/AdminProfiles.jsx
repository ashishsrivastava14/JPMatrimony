import { useState, useEffect } from 'react';
import { FaCheckCircle, FaTimesCircle, FaEye, FaSearch } from 'react-icons/fa';
import './AdminUsers.css';

const AdminProfiles = () => {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    loadProfiles();
  }, []);

  const loadProfiles = async () => {
    setLoading(true);
    try {
      // Mock data
      const mockProfiles = [
        { id: 1, userId: 1, name: 'Priya Sharma', age: 25, gender: 'Female', status: 'pending', createdAt: '2026-02-05', completeness: 85 },
        { id: 2, userId: 2, name: 'Rahul Kumar', age: 28, gender: 'Male', status: 'verified', createdAt: '2026-02-04', completeness: 100 },
        { id: 3, userId: 3, name: 'Anjali Patel', age: 26, gender: 'Female', status: 'verified', createdAt: '2026-02-03', completeness: 95 },
        { id: 4, userId: 4, name: 'Vikram Singh', age: 30, gender: 'Male', status: 'pending', createdAt: '2026-02-02', completeness: 70 },
        { id: 5, userId: 5, name: 'Neha Reddy', age: 24, gender: 'Female', status: 'rejected', createdAt: '2026-02-01', completeness: 60 },
        { id: 6, userId: 6, name: 'Arjun Mehta', age: 29, gender: 'Male', status: 'verified', createdAt: '2026-01-31', completeness: 90 },
        { id: 7, userId: 7, name: 'Kavita Nair', age: 27, gender: 'Female', status: 'pending', createdAt: '2026-01-30', completeness: 80 },
        { id: 8, userId: 8, name: 'Sanjay Gupta', age: 32, gender: 'Male', status: 'verified', createdAt: '2026-01-29', completeness: 100 },
      ];
      setProfiles(mockProfiles);
    } catch (error) {
      console.error('Error loading profiles:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleVerify = (id) => {
    if (window.confirm('Verify this profile?')) {
      setProfiles(profiles.map(p => p.id === id ? { ...p, status: 'verified' } : p));
      alert('Profile verified successfully!');
    }
  };

  const handleReject = (id) => {
    const reason = window.prompt('Enter rejection reason:');
    if (reason) {
      setProfiles(profiles.map(p => p.id === id ? { ...p, status: 'rejected' } : p));
      alert('Profile rejected!');
    }
  };

  const handleView = (id) => {
    alert(`Viewing profile ID: ${id}\nThis would open detailed profile view`);
  };

  const filteredProfiles = profiles
    .filter(p => filter === 'all' || p.status === filter)
    .filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));

  const stats = {
    total: profiles.length,
    verified: profiles.filter(p => p.status === 'verified').length,
    pending: profiles.filter(p => p.status === 'pending').length,
    rejected: profiles.filter(p => p.status === 'rejected').length,
  };

  if (loading) return <div className="loading">Loading profiles...</div>;

  return (
    <div className="admin-users-page">
      <div className="page-header">
        <h1>Profile Management</h1>
        <p>Review and verify user profiles</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>{stats.total}</h3>
          <p>Total Profiles</p>
        </div>
        <div className="stat-card">
          <h3>{stats.verified}</h3>
          <p>Verified</p>
        </div>
        <div className="stat-card">
          <h3>{stats.pending}</h3>
          <p>Pending</p>
        </div>
        <div className="stat-card">
          <h3>{stats.rejected}</h3>
          <p>Rejected</p>
        </div>
      </div>

      <div className="filters-section">
        <div className="search-box">
          <FaSearch />
          <input
            type="text"
            placeholder="Search profiles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="filter-tabs">
          <button className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>All</button>
          <button className={filter === 'pending' ? 'active' : ''} onClick={() => setFilter('pending')}>Pending</button>
          <button className={filter === 'verified' ? 'active' : ''} onClick={() => setFilter('verified')}>Verified</button>
          <button className={filter === 'rejected' ? 'active' : ''} onClick={() => setFilter('rejected')}>Rejected</button>
        </div>
      </div>

      <div className="table-container">
        <table className="admin-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Completeness</th>
              <th>Status</th>
              <th>Created</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredProfiles.map(profile => (
              <tr key={profile.id}>
                <td>{profile.id}</td>
                <td>{profile.name}</td>
                <td>{profile.age}</td>
                <td>{profile.gender}</td>
                <td>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${profile.completeness}%` }}></div>
                    <span>{profile.completeness}%</span>
                  </div>
                </td>
                <td>
                  <span className={`status-badge status-${profile.status}`}>
                    {profile.status}
                  </span>
                </td>
                <td>{profile.createdAt}</td>
                <td className="actions">
                  <button onClick={() => handleView(profile.id)} className="btn-view" title="View">
                    <FaEye />
                  </button>
                  {profile.status === 'pending' && (
                    <>
                      <button onClick={() => handleVerify(profile.id)} className="btn-approve" title="Verify">
                        <FaCheckCircle />
                      </button>
                      <button onClick={() => handleReject(profile.id)} className="btn-reject" title="Reject">
                        <FaTimesCircle />
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminProfiles;

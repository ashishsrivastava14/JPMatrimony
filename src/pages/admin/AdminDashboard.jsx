import { useState, useEffect } from 'react';
import { adminService } from '../../services/adminService';
import { FaUsers, FaIdCard, FaCheckCircle, FaChartLine } from 'react-icons/fa';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      const data = await adminService.getDashboardStats();
      setStats(data);
    } catch (error) {
      // Mock data
      setStats({
        totalUsers: 5247,
        totalProfiles: 4835,
        verifiedProfiles: 3921,
        activeSubscriptions: 892,
        recentUsers: [
          { id: 1, name: 'Priya Sharma', email: 'priya@example.com', date: '2026-02-05' },
          { id: 2, name: 'Rahul Kumar', email: 'rahul@example.com', date: '2026-02-04' },
          { id: 3, name: 'Anjali Patel', email: 'anjali@example.com', date: '2026-02-04' },
        ],
        pendingApprovals: 23,
      });
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="loading">Loading dashboard...</div>;

  return (
    <div className="admin-dashboard">
      <div className="dashboard-header">
        <h2>Dashboard Overview</h2>
        <p>Welcome to the admin panel</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon" style={{ background: '#3498db' }}>
            <FaUsers />
          </div>
          <div className="stat-info">
            <h3>{stats.totalUsers.toLocaleString()}</h3>
            <p>Total Users</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon" style={{ background: '#9b59b6' }}>
            <FaIdCard />
          </div>
          <div className="stat-info">
            <h3>{stats.totalProfiles.toLocaleString()}</h3>
            <p>Total Profiles</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon" style={{ background: '#2ecc71' }}>
            <FaCheckCircle />
          </div>
          <div className="stat-info">
            <h3>{stats.verifiedProfiles.toLocaleString()}</h3>
            <p>Verified Profiles</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon" style={{ background: '#e74c3c' }}>
            <FaChartLine />
          </div>
          <div className="stat-info">
            <h3>{stats.activeSubscriptions}</h3>
            <p>Active Subscriptions</p>
          </div>
        </div>
      </div>

      <div className="dashboard-content">
        <div className="dashboard-card">
          <h3>Recent Users</h3>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Joined Date</th>
                </tr>
              </thead>
              <tbody>
                {stats.recentUsers.map(user => (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{new Date(user.date).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="dashboard-card">
          <h3>Pending Actions</h3>
          <div className="action-list">
            <div className="action-item">
              <span>Pending Profile Approvals</span>
              <span className="badge">{stats.pendingApprovals}</span>
            </div>
            <div className="action-item">
              <span>Subscription Renewals</span>
              <span className="badge">12</span>
            </div>
            <div className="action-item">
              <span>Support Tickets</span>
              <span className="badge">8</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

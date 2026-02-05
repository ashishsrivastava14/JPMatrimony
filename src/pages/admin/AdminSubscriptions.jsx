import { useState, useEffect } from 'react';
import { FaCheckCircle, FaTimesCircle, FaEye, FaSearch, FaCrown } from 'react-icons/fa';
import './AdminUsers.css';

const AdminSubscriptions = () => {
  const [subscriptions, setSubscriptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    loadSubscriptions();
  }, []);

  const loadSubscriptions = async () => {
    setLoading(true);
    try {
      // Mock data
      const mockSubscriptions = [
        { id: 1, userName: 'Priya Sharma', email: 'priya@example.com', plan: 'Gold', amount: 4999, status: 'active', startDate: '2026-02-01', endDate: '2026-03-01' },
        { id: 2, userName: 'Rahul Kumar', email: 'rahul@example.com', plan: 'Platinum', amount: 9999, status: 'active', startDate: '2026-01-15', endDate: '2026-02-15' },
        { id: 3, userName: 'Anjali Patel', email: 'anjali@example.com', plan: 'Silver', amount: 2999, status: 'expired', startDate: '2025-12-01', endDate: '2026-01-01' },
        { id: 4, userName: 'Vikram Singh', email: 'vikram@example.com', plan: 'Gold', amount: 4999, status: 'active', startDate: '2026-01-20', endDate: '2026-02-20' },
        { id: 5, userName: 'Neha Reddy', email: 'neha@example.com', plan: 'Silver', amount: 2999, status: 'cancelled', startDate: '2026-01-10', endDate: '2026-02-10' },
        { id: 6, userName: 'Arjun Mehta', email: 'arjun@example.com', plan: 'Platinum', amount: 9999, status: 'active', startDate: '2026-02-03', endDate: '2026-03-03' },
        { id: 7, userName: 'Kavita Nair', email: 'kavita@example.com', plan: 'Gold', amount: 4999, status: 'active', startDate: '2026-01-25', endDate: '2026-02-25' },
        { id: 8, userName: 'Sanjay Gupta', email: 'sanjay@example.com', plan: 'Silver', amount: 2999, status: 'active', startDate: '2026-02-04', endDate: '2026-03-04' },
      ];
      setSubscriptions(mockSubscriptions);
    } catch (error) {
      console.error('Error loading subscriptions:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = (id) => {
    if (window.confirm('Cancel this subscription?')) {
      setSubscriptions(subscriptions.map(s => s.id === id ? { ...s, status: 'cancelled' } : s));
      alert('Subscription cancelled!');
    }
  };

  const handleView = (id) => {
    const sub = subscriptions.find(s => s.id === id);
    alert(`Subscription Details:\nUser: ${sub.userName}\nPlan: ${sub.plan}\nAmount: ₹${sub.amount}\nStatus: ${sub.status}`);
  };

  const filteredSubscriptions = subscriptions
    .filter(s => filter === 'all' || s.status === filter)
    .filter(s => s.userName.toLowerCase().includes(searchTerm.toLowerCase()) || s.email.toLowerCase().includes(searchTerm.toLowerCase()));

  const stats = {
    total: subscriptions.length,
    active: subscriptions.filter(s => s.status === 'active').length,
    expired: subscriptions.filter(s => s.status === 'expired').length,
    cancelled: subscriptions.filter(s => s.status === 'cancelled').length,
    revenue: subscriptions.filter(s => s.status === 'active').reduce((sum, s) => sum + s.amount, 0),
  };

  if (loading) return <div className="loading">Loading subscriptions...</div>;

  return (
    <div className="admin-users-page">
      <div className="page-header">
        <h1>Subscription Management</h1>
        <p>Manage user subscriptions and plans</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>{stats.total}</h3>
          <p>Total Subscriptions</p>
        </div>
        <div className="stat-card">
          <h3>{stats.active}</h3>
          <p>Active</p>
        </div>
        <div className="stat-card">
          <h3>₹{stats.revenue.toLocaleString()}</h3>
          <p>Monthly Revenue</p>
        </div>
        <div className="stat-card">
          <h3>{stats.expired + stats.cancelled}</h3>
          <p>Inactive</p>
        </div>
      </div>

      <div className="filters-section">
        <div className="search-box">
          <FaSearch />
          <input
            type="text"
            placeholder="Search subscriptions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="filter-tabs">
          <button className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>All</button>
          <button className={filter === 'active' ? 'active' : ''} onClick={() => setFilter('active')}>Active</button>
          <button className={filter === 'expired' ? 'active' : ''} onClick={() => setFilter('expired')}>Expired</button>
          <button className={filter === 'cancelled' ? 'active' : ''} onClick={() => setFilter('cancelled')}>Cancelled</button>
        </div>
      </div>

      <div className="table-container">
        <table className="admin-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>User</th>
              <th>Email</th>
              <th>Plan</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredSubscriptions.map(sub => (
              <tr key={sub.id}>
                <td>{sub.id}</td>
                <td>{sub.userName}</td>
                <td>{sub.email}</td>
                <td>
                  <span className="plan-badge">
                    <FaCrown /> {sub.plan}
                  </span>
                </td>
                <td>₹{sub.amount.toLocaleString()}</td>
                <td>
                  <span className={`status-badge status-${sub.status}`}>
                    {sub.status}
                  </span>
                </td>
                <td>{sub.startDate}</td>
                <td>{sub.endDate}</td>
                <td className="actions">
                  <button onClick={() => handleView(sub.id)} className="btn-view" title="View">
                    <FaEye />
                  </button>
                  {sub.status === 'active' && (
                    <button onClick={() => handleCancel(sub.id)} className="btn-reject" title="Cancel">
                      <FaTimesCircle />
                    </button>
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

export default AdminSubscriptions;

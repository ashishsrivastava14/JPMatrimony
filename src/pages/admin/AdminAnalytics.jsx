import { useState } from 'react';
import { FaUsers, FaUserPlus, FaChartLine, FaRupeeSign, FaHeart, FaChartBar } from 'react-icons/fa';
import './AdminDashboard.css';

const AdminAnalytics = () => {
  const [period, setPeriod] = useState('month');

  // Mock analytics data
  const stats = {
    totalUsers: 1250,
    newUsersThisMonth: 145,
    totalRevenue: 487500,
    activeSubscriptions: 342,
    successfulMatches: 67,
    profileViews: 15420,
  };

  const userGrowth = [
    { month: 'Jan', users: 950 },
    { month: 'Feb', users: 1250 },
    { month: 'Mar', users: 1450 },
    { month: 'Apr', users: 1680 },
    { month: 'May', users: 1920 },
    { month: 'Jun', users: 2150 },
  ];

  const revenueData = [
    { month: 'Jan', revenue: 385000 },
    { month: 'Feb', revenue: 487500 },
    { month: 'Mar', revenue: 542000 },
    { month: 'Apr', revenue: 598000 },
    { month: 'May', revenue: 645000 },
    { month: 'Jun', revenue: 712000 },
  ];

  const planDistribution = [
    { plan: 'Free', count: 678, percentage: 54 },
    { plan: 'Silver', count: 312, percentage: 25 },
    { plan: 'Gold', count: 186, percentage: 15 },
    { plan: 'Platinum', count: 74, percentage: 6 },
  ];

  const topLocations = [
    { city: 'Mumbai', users: 245 },
    { city: 'Delhi', users: 198 },
    { city: 'Bangalore', users: 187 },
    { city: 'Hyderabad', users: 156 },
    { city: 'Chennai', users: 143 },
  ];

  return (
    <div className="admin-dashboard">
      <div className="page-header">
        <h1>Analytics & Reports</h1>
        <p>Detailed insights and statistics</p>
        <div className="period-selector">
          <button className={period === 'week' ? 'active' : ''} onClick={() => setPeriod('week')}>Week</button>
          <button className={period === 'month' ? 'active' : ''} onClick={() => setPeriod('month')}>Month</button>
          <button className={period === 'year' ? 'active' : ''} onClick={() => setPeriod('year')}>Year</button>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">
            <FaUsers />
          </div>
          <div className="stat-details">
            <h3>{stats.totalUsers.toLocaleString()}</h3>
            <p>Total Users</p>
            <span className="stat-change positive">+12% from last month</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <FaUserPlus />
          </div>
          <div className="stat-details">
            <h3>{stats.newUsersThisMonth}</h3>
            <p>New Users (This Month)</p>
            <span className="stat-change positive">+8% from last month</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <FaRupeeSign />
          </div>
          <div className="stat-details">
            <h3>₹{stats.totalRevenue.toLocaleString()}</h3>
            <p>Total Revenue</p>
            <span className="stat-change positive">+15% from last month</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <FaHeart />
          </div>
          <div className="stat-details">
            <h3>{stats.successfulMatches}</h3>
            <p>Successful Matches</p>
            <span className="stat-change positive">+5% from last month</span>
          </div>
        </div>
      </div>

      <div className="charts-section">
        <div className="chart-card">
          <h2><FaChartLine /> User Growth Trend</h2>
          <div className="chart-placeholder">
            {userGrowth.map((item, index) => (
              <div key={index} className="bar-item">
                <div className="bar" style={{ height: `${(item.users / 2500) * 100}%` }}>
                  <span className="bar-value">{item.users}</span>
                </div>
                <span className="bar-label">{item.month}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="chart-card">
          <h2><FaRupeeSign /> Revenue Trend</h2>
          <div className="chart-placeholder">
            {revenueData.map((item, index) => (
              <div key={index} className="bar-item">
                <div className="bar revenue" style={{ height: `${(item.revenue / 800000) * 100}%` }}>
                  <span className="bar-value">₹{(item.revenue / 1000).toFixed(0)}k</span>
                </div>
                <span className="bar-label">{item.month}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="analytics-grid">
        <div className="analytics-card">
          <h2><FaChartBar /> Subscription Plan Distribution</h2>
          <div className="plan-distribution">
            {planDistribution.map((item, index) => (
              <div key={index} className="plan-item">
                <div className="plan-info">
                  <span className="plan-name">{item.plan}</span>
                  <span className="plan-count">{item.count} users</span>
                </div>
                <div className="plan-bar">
                  <div className="plan-fill" style={{ width: `${item.percentage}%` }}></div>
                </div>
                <span className="plan-percentage">{item.percentage}%</span>
              </div>
            ))}
          </div>
        </div>

        <div className="analytics-card">
          <h2><FaUsers /> Top Locations</h2>
          <div className="top-locations">
            {topLocations.map((item, index) => (
              <div key={index} className="location-item">
                <span className="location-rank">#{index + 1}</span>
                <span className="location-name">{item.city}</span>
                <span className="location-users">{item.users} users</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="additional-stats">
        <div className="stat-row">
          <div className="stat-item">
            <h4>Average Session Duration</h4>
            <p className="stat-value">8m 32s</p>
          </div>
          <div className="stat-item">
            <h4>Profile Completion Rate</h4>
            <p className="stat-value">78%</p>
          </div>
          <div className="stat-item">
            <h4>Match Success Rate</h4>
            <p className="stat-value">5.4%</p>
          </div>
          <div className="stat-item">
            <h4>Customer Satisfaction</h4>
            <p className="stat-value">4.6/5</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAnalytics;

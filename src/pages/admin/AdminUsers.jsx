import { useState, useEffect } from 'react';
import { adminService } from '../../services/adminService';
import { FaCheck, FaBan, FaTrash } from 'react-icons/fa';
import './AdminUsers.css';

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const data = await adminService.getUsers();
      setUsers(data);
    } catch (error) {
      setUsers(Array.from({ length: 10 }, (_, i) => ({
        id: i + 1,
        name: `User ${i + 1}`,
        email: `user${i + 1}@example.com`,
        phone: '+91-XXXXXXXXXX',
        status: i % 3 === 0 ? 'pending' : 'approved',
        createdAt: new Date().toISOString(),
      })));
    } finally {
      setLoading(false);
    }
  };

  const handleApprove = async (userId) => {
    if (window.confirm('Approve this user?')) {
      try {
        await adminService.approveUser(userId);
        alert('User approved successfully');
        loadUsers();
      } catch (error) {
        alert('Failed to approve user');
      }
    }
  };

  const handleBlock = async (userId) => {
    if (window.confirm('Block this user?')) {
      try {
        await adminService.blockUser(userId, 'Violation of terms');
        alert('User blocked successfully');
        loadUsers();
      } catch (error) {
        alert('Failed to block user');
      }
    }
  };

  const handleDelete = async (userId) => {
    if (window.confirm('Delete this user permanently?')) {
      try {
        await adminService.deleteUser(userId);
        alert('User deleted successfully');
        loadUsers();
      } catch (error) {
        alert('Failed to delete user');
      }
    }
  };

  if (loading) return <div className="loading">Loading users...</div>;

  return (
    <div className="admin-users">
      <div className="page-header">
        <h2>User Management</h2>
        <div className="filter-group">
          <select>
            <option>All Users</option>
            <option>Pending</option>
            <option>Approved</option>
            <option>Blocked</option>
          </select>
        </div>
      </div>

      <div className="table-card">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Status</th>
              <th>Joined</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>#{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  <span className={`status-badge ${user.status}`}>
                    {user.status}
                  </span>
                </td>
                <td>{new Date(user.createdAt).toLocaleDateString()}</td>
                <td>
                  <div className="action-buttons">
                    {user.status === 'pending' && (
                      <button onClick={() => handleApprove(user.id)} className="btn-approve" title="Approve">
                        <FaCheck />
                      </button>
                    )}
                    <button onClick={() => handleBlock(user.id)} className="btn-block" title="Block">
                      <FaBan />
                    </button>
                    <button onClick={() => handleDelete(user.id)} className="btn-delete" title="Delete">
                      <FaTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminUsers;

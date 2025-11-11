// src/Pages/Admin.jsx
// Admin dashboard page - only accessible to admin users
import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Navigate } from 'react-router-dom';

function Admin() {
  const { user } = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  const [stats, setStats] = useState({
    totalUsers: 0,
    adminUsers: 0,
    regularUsers: 0
  });

  // Load all users from localStorage
  useEffect(() => {
    const allUsers = JSON.parse(localStorage.getItem('users') || '[]');
    setUsers(allUsers);
    
    // Calculate statistics
    const adminCount = allUsers.filter(u => u.role === 'admin').length;
    setStats({
      totalUsers: allUsers.length,
      adminUsers: adminCount,
      regularUsers: allUsers.length - adminCount
    });
  }, []);

  // Redirect if not admin
  if (!user || user.role !== 'admin') {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="page-container">
      <div className="dashboard-header">
        <h2>Admin Dashboard 👑</h2>
        
        {/* Statistics Cards */}
        <div className="stats-grid">
          <div className="stat-card">
            <h3>{stats.totalUsers}</h3>
            <p>Total Users</p>
          </div>
          <div className="stat-card">
            <h3>{stats.adminUsers}</h3>
            <p>Admin Users</p>
          </div>
          <div className="stat-card">
            <h3>{stats.regularUsers}</h3>
            <p>Regular Users</p>
          </div>
        </div>
      </div>

      {/* Users List */}
      <div className="content-card">
        <h3>All Registered Users</h3>
        <div className="users-table">
          <table>
            <thead>
              <tr>
                <th>Username</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u, index) => (
                <tr key={index}>
                  <td>{u.username}</td>
                  <td>{u.email || 'N/A'}</td>
                  <td>
                    <span className={`role-badge ${u.role}`}>
                      {u.role === 'admin' ? '👑 Admin' : '👤 User'}
                    </span>
                  </td>
                  <td>
                    <span className="status-active">Active</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {users.length === 0 && (
          <p className="no-data">No users registered yet.</p>
        )}
      </div>

      {/* Product Management Section */}
      <div className="content-card">
        <h3>Product Management</h3>
        <p>Manage your product inventory and pricing</p>
        <div className="admin-actions">
          <button className="btn btn-primary">Add New Product</button>
          <button className="btn btn-secondary">View All Products</button>
          <button className="btn btn-outline">Export Data</button>
        </div>
      </div>
    </div>
  );
}

export default Admin;
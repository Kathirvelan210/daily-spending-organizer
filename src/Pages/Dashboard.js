// src/pages/Dashboard.js
import React, { useContext } from 'react';
import { ExpenseContext } from '../Context/ExpenseContext';
import { AuthContext } from '../Context/AuthContext';
import ExpenseForm from '../Components/ExpenseForm';
import ExpenseList from '../Components/ExpenseList';

function Dashboard() {
  const { total, expenses } = useContext(ExpenseContext);
  const { user } = useContext(AuthContext);

  const todayExpenses = expenses.filter(exp => {
    const today = new Date().toDateString();
    const expDate = new Date(exp.id).toDateString();
    return today === expDate;
  });

  return (
    <div className="page-container">
      <div className="dashboard-header">
        <h2>Welcome back, {user?.username}! 👋</h2>
        <div className="stats-grid">
          <div className="stat-card">
            <h3>₹{total.toFixed(2)}</h3>
            <p>Total Spent</p>
          </div>
          <div className="stat-card">
            <h3>{expenses.length}</h3>
            <p>Total Expenses</p>
          </div>
          <div className="stat-card">
            <h3>{todayExpenses.length}</h3>
            <p>Today's Expenses</p>
          </div>
        </div>
      </div>
      
      <div className="dashboard-content">
        <div className="content-card">
          <h3>Add New Expense</h3>
          <ExpenseForm />
        </div>
        
        <div className="content-card">
          <h3>Recent Expenses</h3>
          <ExpenseList />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
// src/components/ExpenseList.js
import React, { useContext } from 'react';
import { ExpenseContext } from '../Context/ExpenseContext';

function ExpenseList() {
  const { expenses, deleteExpense } = useContext(ExpenseContext);

  if (expenses.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem', color: '#666' }}>
        <p>No expenses added yet. Start tracking your spending!</p>
      </div>
    );
  }

  return (
    <ul className="expense-list">
      {expenses.map(exp => (
        <li key={exp.id} className="expense-item">
          <div className="expense-info">
            <strong>{exp.description}</strong>
            <div style={{ fontSize: '0.9rem', color: '#666' }}>
              {new Date(exp.id).toLocaleDateString()}
            </div>
          </div>
          <div className="expense-amount">₹{exp.amount.toFixed(2)}</div>
          <button 
            onClick={() => deleteExpense(exp.id)}
            className="btn btn-secondary"
            style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ExpenseList;

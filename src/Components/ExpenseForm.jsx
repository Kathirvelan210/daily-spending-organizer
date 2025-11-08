// src/components/ExpenseForm.js
import React, { useState, useContext } from 'react';
import { ExpenseContext } from '../Context/ExpenseContext';

function ExpenseForm() {
  const [desc, setDesc] = useState('');
  const [amount, setAmount] = useState('');
  const { addExpense } = useContext(ExpenseContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (parseFloat(amount) <= 0) {
      alert('Please enter a valid amount');
      return;
    }
    addExpense(desc, amount);
    setDesc('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '1rem', alignItems: 'end' }}>
      <div style={{ flex: 2 }}>
        <input 
          value={desc} 
          onChange={e => setDesc(e.target.value)} 
          placeholder="What did you spend on?" 
          required 
        />
      </div>
      <div style={{ flex: 1 }}>
        <input 
          type="number" 
          step="0.01"
          min="0.01"
          value={amount} 
          onChange={e => setAmount(e.target.value)} 
          placeholder="₹0.00" 
          required 
        />
      </div>
      <button type="submit" className="btn btn-primary">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;

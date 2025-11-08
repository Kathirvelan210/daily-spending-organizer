// src/contexts/ExpenseContext.js
import React, { createContext, useState, useEffect, useContext } from 'react';
import { AuthContext } from './AuthContext';

export const ExpenseContext = createContext();

export function ExpenseProvider({ children }) {
  const { user } = useContext(AuthContext);
  const [expenses, setExpenses] = useState([]);

  // Load expenses from localStorage when user logs in or changes
  useEffect(() => {
    if (user) {
      const saved = JSON.parse(localStorage.getItem('expenses_' + user.username) || '[]');
      setExpenses(saved);
    } else {
      setExpenses([]);
    }
  }, [user]);

  const addExpense = (description, amount) => {
    const newExp = {
      id: Date.now(), 
      description, 
      amount: parseFloat(amount)
    };
    const updated = [...expenses, newExp];
    setExpenses(updated);
    localStorage.setItem('expenses_' + user.username, JSON.stringify(updated));
  };

  const deleteExpense = (id) => {
    const updated = expenses.filter(e => e.id !== id);
    setExpenses(updated);
    localStorage.setItem('expenses_' + user.username, JSON.stringify(updated));
  };

  const total = expenses.reduce((sum, e) => sum + e.amount, 0);

  return (
    <ExpenseContext.Provider value={{ expenses, addExpense, deleteExpense, total }}>
      {children}
    </ExpenseContext.Provider>
  );
}

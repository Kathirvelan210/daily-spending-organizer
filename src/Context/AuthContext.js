// src/contexts/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // On app load, check if a user is already in localStorage
  useEffect(() => {
    const stored = localStorage.getItem('currentUser');
    if (stored) {
      setUser(JSON.parse(stored));
    }
  }, []);

  // Signup function with role and email support
  const signup = (username, email, password, role = 'user') => {
    // Get existing users or empty array
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    // Prevent duplicate usernames
    if (users.find(u => u.username === username)) {
      return { success: false, message: 'Username already exists' };
    }
    // Prevent duplicate emails
    if (users.find(u => u.email === email)) {
      return { success: false, message: 'Email already exists' };
    }
    const newUser = { username, email, password, role };
    localStorage.setItem('users', JSON.stringify([...users, newUser]));
    // Auto-login the new user
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    setUser(newUser);
    return { success: true };
  };

  // Login function
  const login = (username, password) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const found = users.find(u => u.username === username && u.password === password);
    if (!found) return { success: false, message: 'Invalid credentials' };
    localStorage.setItem('currentUser', JSON.stringify(found));
    setUser(found);
    return { success: true, role: found.role };
  };

  const logout = () => {
    localStorage.removeItem('currentUser');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

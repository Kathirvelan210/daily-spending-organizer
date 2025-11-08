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

  const signup = (username, password) => {
    // Get existing users or empty array
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    // Prevent duplicate usernames
    if (users.find(u => u.username === username)) {
      return false;
    }
    const newUser = { username, password };
    localStorage.setItem('users', JSON.stringify([...users, newUser]));
    // Auto-login the new user
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    setUser(newUser);
    return true;
  };

  const login = (username, password) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const found = users.find(u => u.username === username && u.password === password);
    if (!found) return false;
    localStorage.setItem('currentUser', JSON.stringify(found));
    setUser(found);
    return true;
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

// src/components/Header.jsx
// Header component with navigation and conditional rendering
import React, { useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import { CartContext } from '../Context/CartContext';

function Header() {
  const { user, logout } = useContext(AuthContext);
  const { getItemCount } = useContext(CartContext);
  const navigate = useNavigate();
  const location = useLocation();

  // Hide header on login and signup pages
  const hideHeader = location.pathname === '/login' || location.pathname === '/signup';

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  // Don't render header on auth pages
  if (hideHeader) {
    return null;
  }

  const cartCount = getItemCount();

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          💰 Daily Spending Organizer
        </Link>
        <nav className="nav">
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/products" className="nav-link">Products</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          {user ? (
            <>
              <Link to="/dashboard" className="nav-link">Dashboard</Link>
              {user.role === 'admin' && (
                <Link to="/admin" className="nav-link">Admin</Link>
              )}
              <Link to="/cart" className="nav-link cart-link">
                Cart
                {cartCount > 0 && (
                  <span className="cart-badge">{cartCount}</span>
                )}
              </Link>
              <span className="user-welcome">
                Hi, {user.username} {user.role === 'admin' && '👑'}
              </span>
              <button onClick={handleLogout} className="btn btn-outline">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-outline">Login</Link>
              <Link to="/signup" className="btn btn-primary">Sign Up</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;

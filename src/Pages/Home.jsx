// src/Pages/Home.jsx
// Home/Landing page for the application
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="page-container">
      {/* Hero Section */}
      <div className="hero-section">
        <h1 className="hero-title">💰 Daily Spending Organizer</h1>
        <p className="hero-subtitle">
          Track your expenses, manage your budget, and take control of your finances
        </p>
        <div className="hero-buttons">
          <Link to="/signup" className="btn btn-primary btn-large">
            Get Started Free
          </Link>
          <Link to="/about" className="btn btn-outline btn-large">
            Learn More
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="content-card">
        <h2 className="section-title">Why Choose Us?</h2>
        <div className="features">
          <div className="feature">
            <div className="feature-icon">📊</div>
            <h3>Easy Tracking</h3>
            <p>Add and categorize your expenses with just a few clicks</p>
          </div>
          <div className="feature">
            <div className="feature-icon">🔒</div>
            <h3>Secure & Private</h3>
            <p>Your data is stored securely in your browser</p>
          </div>
          <div className="feature">
            <div className="feature-icon">📈</div>
            <h3>Real-time Insights</h3>
            <p>See your spending patterns and totals instantly</p>
          </div>
          <div className="feature">
            <div className="feature-icon">🛍️</div>
            <h3>Shopping Cart</h3>
            <p>Browse products and manage your shopping list</p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="content-card">
        <h2 className="section-title">Trusted by Users</h2>
        <div className="stats-grid">
          <div className="stat-card">
            <h3>1000+</h3>
            <p>Active Users</p>
          </div>
          <div className="stat-card">
            <h3>50K+</h3>
            <p>Expenses Tracked</p>
          </div>
          <div className="stat-card">
            <h3>4.8⭐</h3>
            <p>User Rating</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="content-card cta-section">
        <h2>Ready to Start?</h2>
        <p>Join thousands of users managing their finances better</p>
        <Link to="/signup" className="btn btn-primary btn-large">
          Create Your Account
        </Link>
      </div>
    </div>
  );
}

export default Home;
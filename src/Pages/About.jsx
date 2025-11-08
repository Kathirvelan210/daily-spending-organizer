import React from 'react';

function About() {
  return (
    <div className="page-container">
      <div className="content-card">
        <h2>About Daily Spending Organizer</h2>
        <p>Track your daily expenses with ease and stay on top of your budget.</p>
        <div className="features">
          <div className="feature">
            <h3>Easy Tracking</h3>
            <p>Add expenses quickly with our simple interface</p>
          </div>
          <div className="feature">
            <h3>Secure</h3>
            <p>Your data is stored securely in your browser</p>
          </div>
          <div className="feature">
            <h3>Real-time Updates</h3>
            <p>See your spending totals update instantly</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css'; // Import the CSS file

const Landing = () => {
  return (
    <div className="landing-container">
      <h1 className="landing-title">Welcome to the Podcast App</h1>
      <p className="landing-description">Your favorite podcasts all in one place.</p>
      <Link to="/home">
        <button className="landing-button">Enter</button>
      </Link>
    </div>
  );
}

export default Landing;

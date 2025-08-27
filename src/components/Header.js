import React, { useState } from 'react';
import SignupForm from './SignupForm';
import './Header.css';

function Header() {
  const [showSignup, setShowSignup] = useState(false);

  return (
    <>
      <header className="header">
        <div className="container">
          <img src="https://hillboat.com/assets/logotext-DWnb7eaG.svg" className="logo">Coursespace</img>
          <nav className="nav">
            <a href="#home">Home</a>
            <a href="#courses">Courses</a>
            <a href="#testimonial">Testimonial</a>
            <a href="#mentor">Mentor</a>
          </nav>
          <div className="auth-buttons">
            <button className="login-btn">Login</button>
            <button className="signup-btn" onClick={() => setShowSignup(true)}>Sign Up</button>
          </div>
        </div>
      </header>
      <SignupForm isOpen={showSignup} onClose={() => setShowSignup(false)} />
    </>
  );
}

export default Header;
import React, { useState } from 'react';
import SignupForm from './SignupForm';
import './Header.css';

function Header() {
  const [showSignup, setShowSignup] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="header">
        <div className="container">
          <img src="https://hillboat.com/assets/logotext-DWnb7eaG.svg" className="logo" alt="Coursespace" />
          
          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            ☰
          </button>
          
          <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
            <a href="#home">Home</a>
            <a href="#courses">Courses</a>
            <a href="#testimonial">Testimonial</a>
            <a href="#mentor">Mentor</a>
            <div className="auth-buttons mobile-auth">
              <button className="login-btn">Login</button>
              <button className="signup-btn" onClick={() => setShowSignup(true)}>Sign Up</button>
            </div>
          </nav>
          
          <div className="auth-buttons desktop-auth">
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
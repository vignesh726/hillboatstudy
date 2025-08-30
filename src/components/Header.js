import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import './Header.css';

function Header() {
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (loginData) => {
    if (loginData.username === 'admin' && loginData.password === 'password') {
      setIsLoggedIn(true);
      setUsername(loginData.username);
      setShowLogin(false);
      return true;
    }
    return false;
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <img src="https://hillboat.com/assets/logotext-DWnb7eaG.svg" className="logo" alt="Hillboat Study" />
          
          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            ☰
          </button>
          
          <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/courses">Courses</Link>
            <a href="#testimonial">Testimonial</a>
            <a href="#mentor">Mentor</a>
            <div className="auth-buttons mobile-auth">
              {!isLoggedIn ? (
                <>
                  <button className="login-btn" onClick={() => setShowLogin(true)}>Login</button>
                  <button className="signup-btn" onClick={() => setShowSignup(true)}>Sign Up</button>
                </>
              ) : (
                <div className="logged-in-section">
                  <span className="welcome-text">Welcome, {username}!</span>
                  <button className="logout-btn" onClick={handleLogout}>Logout</button>
                </div>
              )}
            </div>
          </nav>
          
          <div className="auth-buttons desktop-auth">
            {!isLoggedIn ? (
              <>
                <button className="login-btn" onClick={() => setShowLogin(true)}>Login</button>
                <button className="signup-btn" onClick={() => setShowSignup(true)}>Sign Up</button>
              </>
            ) : (
              <div className="logged-in-section">
                <span className="welcome-text">Welcome, {username}!</span>
                <button className="logout-btn" onClick={handleLogout}>Logout</button>
              </div>
            )}
          </div>
        </div>
      </header>
      <SignupForm isOpen={showSignup} onClose={() => setShowSignup(false)} />
      <LoginForm isOpen={showLogin} onClose={() => setShowLogin(false)} onLogin={handleLogin} />
    </>
  );
}

export default Header;
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Hillboat Study</h3>
          <p>Online learning platform</p>
        </div>
        <div className="footer-section">
          <h4>Courses</h4>
          <ul>
            <li>Web Development</li>
            <li>Mobile Apps</li>
            <li>UI/UX Design</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Support</h4>
          <ul>
            <li>Help Center</li>
            <li>Contact Us</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li>About</li>
            <li>Careers</li>
            <li>Blog</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
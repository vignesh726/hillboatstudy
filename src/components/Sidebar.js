import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-card">
        <h3>Make you'r Learning Enjoyable</h3>
        <div className="avatar">👩‍💼</div>
        <div className="progress-bars">
          <div className="progress-item">
            <span>Our Courses</span>
            <div className="progress-bar">
              <div className="progress" style={{width: '80%'}}></div>
            </div>
          </div>
          <div className="progress-item">
            <span>Free Courses</span>
            <div className="progress-bar">
              <div className="progress" style={{width: '60%'}}></div>
            </div>
          </div>
        </div>
      </div>

      <div className="sidebar-card">
        <h3>Testimonial What our Students Say</h3>
        <div className="testimonial">
          <div className="avatar">👨‍🎓</div>
          <p>"Online learning methods are very effective"</p>
          <small>- John Smith</small>
        </div>
      </div>

      <div className="sidebar-card">
        <h3>Our Expert Mentors</h3>
        <div className="mentors">
          <div className="mentor">👨‍🏫 Ron Darlan</div>
          <div className="mentor">👨‍💻 Rizki Kwan</div>
          <div className="mentor">👩‍🔬 Yuki Robert</div>
        </div>
      </div>

      <div className="sidebar-card newsletter">
        <h3>Subscribe to Our News Letter</h3>
        <input type="email" placeholder="Enter email" />
        <button>Subscribe</button>
      </div>
    </aside>
  );
}

export default Sidebar;
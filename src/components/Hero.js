import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Improve you'r <span className="highlight">Skill</span><br />
          with Different Way
        </h1>
        <p>Let's take an online course to improve your skills in a different way. You can set your own study time according to your learning speed. So you don't have to worry.</p>
        <div className="hero-buttons">
          <button className="get-started-btn">Get Started</button>
          <button className="watch-video-btn">▶ Watch Video</button>
        </div>
        <div className="certificate">
          📜 Certificate
          <small>Get certificate after course completion</small>
        </div>
      </div>
      <div className="hero-image">
        <img src="./bookboard.avif" className="student-avatar" alt="Student learning" />
      </div>
    </section>
  );
}

export default Hero;
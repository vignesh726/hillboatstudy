import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import VideoModal from './VideoModal';
import './Hero.css';

function Hero() {
  const [showVideo, setShowVideo] = useState(false);
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Improve you'r <span className="highlight">Skill</span><br />
          with Different Way
        </h1>
        <p>Let's take an online course to improve your skills in a different way. You can set your own study time according to your learning speed. So you don't have to worry.</p>
        <div className="hero-buttons">
          <button className="get-started-btn" onClick={() => navigate('/courses')}>Get Started</button>
          <button className="watch-video-btn" onClick={() => setShowVideo(true)}>▶ Watch Video</button>
        </div>
        <div className="certificate">
          📜 Certificate
          <small>Get certificate after course completion</small>
        </div>
      </div>
      <div className="hero-image">
        <img src="./bookboard.avif" className="student-avatar" alt="Student learning" />
      </div>
      <VideoModal 
        isOpen={showVideo} 
        onClose={() => setShowVideo(false)} 
        videoId="dftqATKuRIc" 
      />
    </section>
  );
}

export default Hero;
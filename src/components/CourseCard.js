import React, { useState } from 'react';
import VideoModal from './VideoModal';
import './CourseCard.css';

function CourseCard({ course }) {
  const [showModules, setShowModules] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="course-card">
      <div className="course-image-container">
        {course.image.startsWith('<svg') ? (
          <div className="course-svg" dangerouslySetInnerHTML={{ __html: course.image }} />
        ) : (
          <img src={course.image} alt={course.title} className="course-image" />
        )}
      </div>
      <div className="course-content">
        <h3>{course.title}</h3>
        <p className="instructor">By {course.instructor}</p>
        <div className="course-info">
          <span className="duration">{course.duration}</span>
          <span className="price">{course.price}</span>
        </div>
        
        <button 
          className="modules-btn"
          onClick={() => setShowModules(!showModules)}
        >
          {showModules ? 'Hide Modules' : 'View Modules'}
        </button>
        
        {showModules && (
          <div className="modules">
            <h4>Course Modules:</h4>
            <ul>
              {course.modules.map((module, index) => (
                <li key={index}>{module}</li>
              ))}
            </ul>
          </div>
        )}
        
        <div className="course-actions">
         
          <button className="enroll-btn">Enroll Now</button>
        </div>
      </div>
      <VideoModal 
        isOpen={showVideo} 
        onClose={() => setShowVideo(false)} 
        videoId="dftqATKuRIc" 
      />
    </div>
  );
}

export default CourseCard;
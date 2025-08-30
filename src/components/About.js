import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about">
      <div className="">
        <h2>About Hillboat Study</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Hillboat Study is a modern learning platform that connects passionate instructors 
              with eager learners worldwide. We believe in making quality education accessible 
              to everyone, anywhere.
            </p>
            <div className="features">
              <div className="feature">
                <h3>For Instructors</h3>
                <p>Create engaging courses with our intuitive tools and reach students globally.</p>
              </div>
              <div className="feature">
                <h3>For Students</h3>
                <p>Learn at your own pace with interactive lessons and track your progress.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
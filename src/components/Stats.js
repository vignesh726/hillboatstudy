import React from 'react';
import './Stats.css';

function Stats() {
  return (
    <section className="stats">
      <div className="stat-item">
        <h3>10K+</h3>
        <p>Students</p>
      </div>
      <div className="stat-item">
        <h3>20+</h3>
        <p>Quality Courses</p>
      </div>
      <div className="stat-item">
        <h3>10+</h3>
        <p>Experience Mentors</p>
      </div>
    </section>
  );
}

export default Stats;
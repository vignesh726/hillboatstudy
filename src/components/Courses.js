import React from 'react';
import './Courses.css';

function Courses() {
  const courses = [
    {
      title: "Android Development from Zero to Hero",
      rating: 5,
      reviews: 8,
      price: "$25/course",
      level: "Beginner",
      image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=400&h=250&fit=crop"
    },
    {
      title: "UI/UX Complete Guide",
      rating: 4,
      reviews: 15,
      price: "$20/course",
      level: "Intermediate",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop"
    },
    {
      title: "Basic Machine Learning",
      rating: 5,
      reviews: 7,
      price: "$30/course",
      level: "Beginner",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop"
    }
  ];

  return (
    <section className="courses">
      <h2>Most Popular Courses</h2>
      <div className="course-grid">
        {courses.map((course, index) => (
          <div key={index} className="course-card">
            <div className="course-image-container">
              <img src={course.image} alt={course.title} className="course-image" />
              <span className="level-badge">{course.level}</span>
            </div>
            <h3>{course.title}</h3>
            <div className="rating">
              {"⭐".repeat(Math.floor(course.rating))} ({course.reviews})
            </div>
            <div className="course-footer">
              <span className="price">{course.price}</span>
              <button className="course-arrow">→</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Courses;
import React, { useState } from 'react';
import './SignupForm.css';

function SignupForm({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

 const handleSubmit = async (e) => {
  e.preventDefault();

  const scriptURL = 'https://script.google.com/macros/s/1hofrOxHx0VsS9z_xOBc79mbcEiGxHLpUKQoijKSD9Cbx3X4A5pMSFxgk/exec';

  try {
    const response = await fetch(scriptURL, {
      method: 'POST',
      body: new FormData(e.target),
    });

    if (!response.ok) throw new Error('Network response was not ok');

    alert('Registration successful!');
    onClose(); // make sure this function exists
    setFormData({ name: '', email: '', phone: '' }); // controlled form state
  } catch (error) {
    console.error('Error:', error);
    alert('Error submitting form');
  }
};


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="signup-form" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default SignupForm;
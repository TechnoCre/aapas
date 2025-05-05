import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './pstyles/UsersDetailsForm.scss';

const UsersDetailsForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    skills: '',
    qualities: '',
    work: '',
    bio: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    alert('Your details have been submitted successfully!');
    // Navigate to the next page or dashboard
    navigate('/home');
  };

  const handleSkip = () => {
    // Navigate to the next page or dashboard without submitting
    navigate('/home');
  };

  return (
    <div className="user-details-form-container">
      <h2>User Details Form</h2>
      <form onSubmit={handleSubmit} className="user-details-form">
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="skills">Skills</label>
          <input
            type="text"
            id="skills"
            name="skills"
            placeholder="Enter your skills (e.g., JavaScript, React)"
            value={formData.skills}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="qualities">Qualities</label>
          <input
            type="text"
            id="qualities"
            name="qualities"
            placeholder="Enter your qualities (e.g., Leadership, Creativity)"
            value={formData.qualities}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="work">Work</label>
          <input
            type="text"
            id="work"
            name="work"
            placeholder="Enter your work (e.g., Developer, Business Owner)"
            value={formData.work}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="bio">Bio</label>
          <textarea
            id="bio"
            name="bio"
            placeholder="Write a short bio about yourself"
            value={formData.bio}
            onChange={handleChange}
            rows="5"
          ></textarea>
        </div>

        <div className="form-buttons">
          <button type="submit" className="submit-button">
            Submit
          </button>
          <button type="button" className="skip-button" onClick={handleSkip}>
            Skip
          </button>
        </div>
      </form>
    </div>
  );
};

export default UsersDetailsForm;

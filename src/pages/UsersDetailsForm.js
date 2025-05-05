import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './pstyles/UsersDetailsForm.scss';

const UsersDetailsForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dob: '',
    skills: '',
    qualities: '',
    work: '',
    bio: '',
    profileImage: null,
    coverImage: null, 
  });

  const [step, setStep] = useState(0); // Track the current step

  const formFields = [
    { label: 'UserName', name: 'name', type: 'text', placeholder: 'Enter your user name' },
    { label: 'Email', name: 'email', type: 'email', placeholder: 'Enter your email' },
    { label: 'Phone Number', name: 'phone', type: 'tel', placeholder: 'Enter your phone number' },
    { label: 'Date of Birth', name: 'dob', type: 'date', placeholder: 'Enter your date of birth' },
    { label: 'Skills', name: 'skills', type: 'text', placeholder: 'Enter your skills (e.g., JavaScript, React)' },
    { label: 'Qualities', name: 'qualities', type: 'text', placeholder: 'Enter your qualities (e.g., Leadership, Creativity)' },
    { label: 'Work', name: 'work', type: 'text', placeholder: 'Enter your work (e.g., Developer, Business Owner)' },
    { label: 'Bio', name: 'bio', type: 'textarea', placeholder: 'Write a short bio about yourself' },
    { label: 'Profile Image', name: 'profileImage', type: 'file', placeholder: 'Upload your profile image' },
    { label: 'Cover Image', name: 'coverImage', type: 'file', placeholder: 'Upload your cover image' },
  ];

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      // Handle file input for images
      const reader = new FileReader();
      reader.onload = () => {
        setFormData({ ...formData, [name]: reader.result });
      };
      reader.readAsDataURL(files[0]);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleNext = () => {
    if (step < formFields.length - 1) {
      setStep(step + 1);
    } else {
      handleSubmit();
    }
  };

  const handleSkip = () => {
    if (step < formFields.length - 1) {
      setStep(step + 1);
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    console.log('Form Data Submitted:', formData);
    // Save form data to localStorage
    localStorage.setItem('userDetails', JSON.stringify(formData));
    alert('Your details have been submitted successfully!');
    navigate('/account'); // Navigate to the account page
  };

  const currentField = formFields[step];

  return (
    <div className="user-details-form-container">
      <h2>User Details Form</h2>
      <form className="user-details-form">
        <div className="form-group">
          <label htmlFor={currentField.name}>{currentField.label}</label>
          {currentField.type === 'textarea' ? (
            <textarea
              id={currentField.name}
              name={currentField.name}
              placeholder={currentField.placeholder}
              value={formData[currentField.name]}
              onChange={handleChange}
              rows="5"
            ></textarea>
          ) : currentField.type === 'file' ? (
            <>
              <input
                type="file"
                id={currentField.name}
                name={currentField.name}
                onChange={handleChange}
              />
              {formData[currentField.name] && (
                <img
                  src={formData[currentField.name]}
                  alt={`${currentField.label} Preview`}
                  className="image-preview"
                />
              )}
            </>
          ) : (
            <input
              type={currentField.type}
              id={currentField.name}
              name={currentField.name}
              placeholder={currentField.placeholder}
              value={formData[currentField.name]}
              onChange={handleChange}
            />
          )}
        </div>

        <div className="form-buttons">
          <button type="button" className="next-button" onClick={handleNext}>
            {step < formFields.length - 1 ? 'Next' : 'Submit'}
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

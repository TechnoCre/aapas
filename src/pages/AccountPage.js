import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './pstyles/AccountPage.scss';
import FeedPost from '../components/FeedPost';

const AccountPage = () => {
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false); // Track edit mode
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const userDetails = JSON.parse(localStorage.getItem('userDetails')); // Get logged-in user's email
        if (!userDetails || !userDetails.email) {
          alert('No user details found. Please log in.');
          navigate('/login');
          return;
        }

        const response = await fetch(`http://localhost:5000/api/users/${userDetails.email}`);
        const data = await response.json();

        if (response.ok) {
          setUser(data); // Set user-specific data
          setFormData(data); // Pre-fill form data for editing
        } else {
          alert(data.message || 'Failed to fetch user details.');
        }
      } catch (error) {
        console.error('Error fetching user details:', error);
        alert('An error occurred. Please try again later.');
      }
    };

    fetchUserDetails();
  }, [navigate]);

  const handleEditClick = () => {
    setIsEditing(true); // Enable edit mode
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch(`http://localhost:5000/api/users/update/${user.email}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (response.ok) {
            setUser(data.user); // Update user data
            setIsEditing(false); // Exit edit mode
            alert('Profile updated successfully!');
        } else {
            alert(data.message || 'Failed to update profile.');
        }
    } catch (error) {
        console.error('Error updating profile:', error);
        alert('An error occurred. Please try again later.');
    }
  };

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="account-page">
        <div className="profile-card">
          <div className="cover-image">
            <img src={user.coverImage || 'https://via.placeholder.com/800x200'} alt="Cover" />
          </div>

          <img
            src={user.profileImage || 'https://i.pravatar.cc/150?img=3'}
            alt="User"
            className="profile-img"
          />
          <h2 className="name">{user.name}</h2>
          <p className="username">@{user.name.toLowerCase().replace(/\s+/g, '')}</p>
          <p className="email">{user.email}</p>
          <p className="bio">{user.bio}</p>
          <p className="joined">Date of Birth: {user.dob}</p>

          <div className="friends-info">
            <p><strong>Skills:</strong> {user.skills}</p>
            <p><strong>Qualities:</strong> {user.qualities}</p>
            <p><strong>Work:</strong> {user.work}</p>
          </div>

          <button className="edit-button" onClick={handleEditClick}>Edit Profile</button>
        </div>

        {isEditing && (
          <form className="edit-form" onSubmit={handleFormSubmit}>
            <h2>Edit Profile</h2>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name || ''}
                onChange={handleFormChange}
              />
            </label>
            <label>
              Phone:
              <input
                type="text"
                name="phone"
                value={formData.phone || ''}
                onChange={handleFormChange}
              />
            </label>
            <label>
              Date of Birth:
              <input
                type="date"
                name="dob"
                value={formData.dob || ''}
                onChange={handleFormChange}
              />
            </label>
            <label>
              Skills:
              <input
                type="text"
                name="skills"
                value={formData.skills || ''}
                onChange={handleFormChange}
              />
            </label>
            <label>
              Qualities:
              <input
                type="text"
                name="qualities"
                value={formData.qualities || ''}
                onChange={handleFormChange}
              />
            </label>
            <label>
              Work:
              <input
                type="text"
                name="work"
                value={formData.work || ''}
                onChange={handleFormChange}
              />
            </label>
            <label>
              Bio:
              <textarea
                name="bio"
                value={formData.bio || ''}
                onChange={handleFormChange}
              ></textarea>
            </label>
            <button type="submit">Save Changes</button>
            <button type="button" onClick={() => setIsEditing(false)}>Cancel</button>
          </form>
        )}
      </div>

      <div>
        <FeedPost />
      </div>
    </>
  );
};

export default AccountPage;
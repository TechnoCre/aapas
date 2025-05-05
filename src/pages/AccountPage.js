import React, { useEffect, useState } from 'react';
import './pstyles/AccountPage.scss';
import FeedPost from '../components/FeedPost';

const AccountPage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Retrieve user details from localStorage
    const userDetails = JSON.parse(localStorage.getItem('userDetails'));
    setUser(userDetails);
  }, []);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="account-page">
        <div className="profile-card">
          {/* Cover Image */}
          <div className="cover-image">
            <img
              src={user.coverImage || 'https://via.placeholder.com/800x200'}
              alt="Cover"
            />
          </div>

          {/* Profile Section */}
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

          {/* Friends Section */}
          <div className="friends-info">
            <p><strong>Skills:</strong> {user.skills}</p>
            <p><strong>Qualities:</strong> {user.qualities}</p>
            <p><strong>Work:</strong> {user.work}</p>
          </div>

          <button className="edit-button">Edit Profile</button>
        </div>

        {/* Photo Gallery */}
        <div className="photo-gallery">
          <h3>Photo Gallery</h3>
          <div className="gallery-grid">
            {[...Array(5)].map((_, index) => (
              <img
                key={index}
                src="https://via.placeholder.com/150"
                alt={`Gallery ${index + 1}`}
                className="gallery-item"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Feed Section */}
      <div>
        <FeedPost />
      </div>
    </>
  );
};

export default AccountPage;
import React from 'react';
import './pstyles/AccountPage.scss';
import FeedPost from '../components/FeedPost';

const AccountPage = () => {
  const user = {
    name: 'Moksh Grover',
    email: 'moksh@example.com',
    username: 'moksh123',
    profileImage: 'https://i.pravatar.cc/150?img=3',
    coverImage: 'https://via.placeholder.com/800x200', // Cover image
    bio: 'Frontend Developer. Coffee enthusiast. Cat lover.',
    joined: 'January 2025',
    friends: 120,
    mutualFriends: 15,
    gallery: [
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150',
    ],
  };

  return (
    <>
      <div className="account-page">
        <div className="profile-card">
          {/* Cover Image */}
          <div className="cover-image">
            <img src={user.coverImage} alt="Cover" />
          </div>

          {/* Profile Section */}
          <img src={user.profileImage} alt="User" className="profile-img" />
          <h2 className="name">{user.name}</h2>
          <p className="username">@{user.username}</p>
          <p className="email">{user.email}</p>
          <p className="bio">{user.bio}</p>
          <p className="joined">Joined: {user.joined}</p>

          {/* Friends Section */}
          <div className="friends-info">
            <p><strong>Friends:</strong> {user.friends}</p>
            <p><strong>Mutual Friends:</strong> {user.mutualFriends}</p>
          </div>

          <button className="edit-button">Edit Profile</button>
        </div>

        {/* Photo Gallery */}
        <div className="photo-gallery">
          <h3>Photo Gallery</h3>
          <div className="gallery-grid">
            {user.gallery.map((photo, index) => (
              <img key={index} src={photo} alt={`Gallery ${index + 1}`} className="gallery-item" />
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
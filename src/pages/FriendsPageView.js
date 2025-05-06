import React, { useState, useEffect } from 'react';
import './pstyles/FriendsPageView.scss';

const FriendsPageView = () => {
  const [users, setUsers] = useState([]); // List of all users
  const [searchTerm, setSearchTerm] = useState(''); // Search input
  const [friendRequests, setFriendRequests] = useState([]); // List of friend requests

  useEffect(() => {
    // Fetch all users from the backend
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/users');
        const data = await response.json();
        if (response.ok) {
          setUsers(data);
        } else {
          alert('Failed to fetch users.');
        }
      } catch (error) {
        console.error('Error fetching users:', error);
        alert('An error occurred while fetching users.');
      }
    };

    fetchUsers();
  }, []);

  const handleAddFriendRequest = (user) => {
    if (friendRequests.some((request) => request.email === user.email)) {
      alert('Friend request already sent.');
      return;
    }
    setFriendRequests([...friendRequests, user]);
    alert(`Friend request sent to ${user.name}.`);
  };

  const handleShowProfile = (user) => {
    alert(`Viewing profile of ${user.name}`);
    // navigate to a profile page or display a modal with user details
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="friends-page">
      <h1>Find and Add Friends</h1>
      <p>Search for users and send friend requests or view their profiles.</p>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for friends..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="users-list">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <div key={user.email} className="user-card">
              <img
                src={user.profileImage || 'https://i.pravatar.cc/150?img=3'}
                alt={user.name}
                className="user-avatar"
              />
              <div className="user-info">
                <h3>{user.name}</h3>
                <p>{user.email}</p>
              </div>
              <div className="user-actions">
                <button
                  className="add-friend-button"
                  onClick={() => handleAddFriendRequest(user)}
                >
                  Add Friend
                </button>
                <button
                  className="show-profile-button"
                  onClick={() => handleShowProfile(user)}
                >
                  Show Profile
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No users found.</p>
        )}
      </div>

      <div className="friend-requests">
        <h2>Friend Requests Sent</h2>
        {friendRequests.length > 0 ? (
          friendRequests.map((request) => (
            <div key={request.email} className="friend-request-card">
              <img
                src={request.profileImage || 'https://i.pravatar.cc/150?img=3'}
                alt={request.name}
                className="friend-avatar"
              />
              <div className="friend-info">
                <h3>{request.name}</h3>
                <p>{request.email}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No friend requests sent yet.</p>
        )}
      </div>
    </div>
  );
};

export default FriendsPageView;

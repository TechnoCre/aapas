import React, { useState } from 'react';
import './styles/FirendsOnline.scss';

const FriendsOnline = () => {
  const [friends] = useState([
    { id: 1, name: 'John Doe', isOnline: true },
    { id: 2, name: 'Jane Smith', isOnline: false },
    { id: 3, name: 'Sam Wilson', isOnline: true },
    { id: 4, name: 'Emily Davis', isOnline: false },
  ]);

  const onlineFriends = friends.filter(friend => friend.isOnline);

  return (
    <div className="friends-online">
      <h1 className="title">Friends Online</h1>
      <div className="friend-list">
        {onlineFriends.length === 0 ? (
          <p className="no-friends">No friends are currently online.</p>
        ) : (
          <ul>
            {onlineFriends.map(friend => (
              <li key={friend.id} className="friend-item">
                <p className="friend-name">{friend.name}</p>
                <div className="status online">Online</div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default FriendsOnline;

import React, { useState } from 'react';
import './pstyles/ChatPage.scss'; // Update the path if the file is in a different folder

const mockUsers = [
  { id: 1, name: 'Alice', avatar: 'https://i.pravatar.cc/100?img=5' },
  { id: 2, name: 'Bob', avatar: 'https://i.pravatar.cc/100?img=8' },
  { id: 3, name: 'Charlie', avatar: 'https://i.pravatar.cc/100?img=12' }
];

const ChatPage = () => {
  const [selectedUser, setSelectedUser] = useState(mockUsers[0]);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    const newMsg = {
      id: Date.now(),
      sender: 'me',
      text: input,
      timestamp: new Date().toLocaleTimeString()
    };
    setMessages([...messages, newMsg]);
    setInput('');
  };

  return (
    <div className="chat-page">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>Chats</h2>
        <ul>
          {mockUsers.map((user) => (
            <li
              key={user.id}
              onClick={() => setSelectedUser(user)}
              className={selectedUser.id === user.id ? 'active' : ''}
            >
              <img src={user.avatar} alt={user.name} />
              <span>{user.name}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Chat Window */}
      <div className="chat-window">
        {/* Chat Header */}
        <div className="chat-header">
          <img src={selectedUser.avatar} alt={selectedUser.name} />
          <h3>{selectedUser.name}</h3>
        </div>

        {/* Chat Body */}
        <div className="chat-body">
          {messages.length === 0 ? (
            <p className="no-messages">No messages yet. Start the conversation!</p>
          ) : (
            messages.map((msg) => (
              <div
                key={msg.id}
                className={`message ${msg.sender === 'me' ? 'sent' : 'received'}`}
              >
                <p>{msg.text}</p>
                <span className="time">{msg.timestamp}</span>
              </div>
            ))
          )}
        </div>

        {/* Chat Footer */}
        <div className="chat-footer">
          <input
            type="text"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          />
          <button onClick={handleSend}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
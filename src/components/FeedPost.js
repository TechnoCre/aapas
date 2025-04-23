import React, { useState } from 'react';
import './styles/FeedPostPage.scss'; // Adjust the path as necessary

const FeedPost = () => {
    const [postContent, setPostContent] = useState('');
    const [media, setMedia] = useState(null);
    const [feed, setFeed] = useState([]);
  
    const handleMediaChange = (e) => {
      const file = e.target.files[0];
      if (file) setMedia(URL.createObjectURL(file));
    };
  
    const handlePost = () => {
      if (postContent.trim() || media) {
        const newPost = {
          id: Date.now(),
          text: postContent,
          media,
          createdAt: new Date().toLocaleString()
        };
        setFeed([newPost, ...feed]);
        setPostContent('');
        setMedia(null);
      }
    };
  
    return (
      <div className="feed-page">
        <div className="feed-box">
          <textarea
            placeholder="What's on your mind?"
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
          />
          {media && (
            <div className="media-preview">
              {media.endsWith('.mp4') ? (
                <video src={media} controls />
              ) : (
                <img src={media} alt="preview" />
              )}
            </div>
          )}
          <div className="actions">
            <input
              type="file"
              accept="image/*,video/*"
              onChange={handleMediaChange}
              id="mediaUpload"
              hidden
            />
            <label htmlFor="mediaUpload" className="upload-btn">Upload Media</label>
            <button onClick={handlePost} className="post-btn">Post</button>
          </div>
        </div>
  
        <div className="feed-list">
          {feed.map((item) => (
            <div key={item.id} className="feed-item">
              <p className="text">{item.text}</p>
              {item.media && (
                item.media.includes('.mp4') ? (
                  <video src={item.media} controls className="media" />
                ) : (
                  <img src={item.media} alt="post" className="media" />
                )
              )}
              <p className="timestamp">{item.createdAt}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default FeedPost

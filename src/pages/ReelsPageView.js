import React from 'react'
import './pstyles/ReelsPageView.scss'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const sampleReels = [
  {
    id: 1,
    video: 'https://www.w3schools.com/html/mov_bbb.mp4',
    caption: 'Green screen with @nareshparmarrr 🎬🔥',
    user: '@ukhasdavideochannel9112',
    hashtags: '#shorts #dancevideo #prabhudeva',
  }
];
const ReelsPageView = () => {

  return (
    <div className="reels-page">
    {sampleReels.map((reel) => (
      <div key={reel.id} className="reel">
        <video
          className="reel-video"
          src={reel.video}
          controls
          muted
          loop
          playsInline
        />

        <div className="reel-info">
          <div className="user">
            <span className="username">{reel.user}</span>
            <button className="subscribe-btn">Follow</button>
          </div>
          <p className="caption">{reel.caption}</p>
          <p className="hashtags">{reel.hashtags}</p>
        </div>

        <div className="reel-sidebar">
          <div className="icon-group">
            <FavoriteBorderIcon fontSize="large" />
            <span>93K</span>
          </div>
          <div className="icon-group">
            <ChatBubbleOutlineIcon fontSize="large" />
            <span>74</span>
          </div>
          <div className="icon-group">
            <ShareIcon fontSize="large" />
            <span>Share</span>
          </div>
          <div className="icon-group">
            <MoreHorizIcon fontSize="large" />
          </div>
        </div>
      </div>
    ))}
  </div>
);
};

export default ReelsPageView

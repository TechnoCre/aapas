import React from 'react';
import './pstyles/HomePageView.scss'; // Fixed import path
import { Link } from 'react-router-dom';
import { ArrowDropDown, Collections, Diversity2, Group, OndemandVideo, Menu } from '@mui/icons-material';
import img1 from '../assets/images/freepik__the-style-is-candid-image-photography-with-natural__78007.jpg';
import ReelsSection from '../components/ReelsSection';
import PhotoPostCard from '../components/PhotoPostCard';
import FriendRequest from '../components/FriendRequest';
import FriendsOnline from '../components/FirendsOnline'; // Fixed typo in import
import FeedPost from '../components/FeedPost';
import NavbarMenu from '../components/NavbarMenu';

const HomePageView = () => {
  return (
    <>
      {/* <div>
        <NavbarMenu />
      </div>
       */}
      <div className="home-page-view">
        <div className="home-page-content">
          <div className="home-page-header">
            <ReelsSection />
          </div>

          <div className="feed-section">
            <FeedPost />
            <PhotoPostCard />
          </div>
        </div>

        <aside className="side-options-bar">
          <FriendRequest />
          <FriendsOnline />
        </aside>
      </div>
    </>
  );
};

export default HomePageView;

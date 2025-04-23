import React from 'react'
import './pstyles/HomePageView.scss' // Fixed import path
import { Link } from 'react-router-dom'
import { ArrowDropDown, Collections, Diversity2, Group, OndemandVideo, Menu } from '@mui/icons-material'
import img1 from '../assets/images/freepik__the-style-is-candid-image-photography-with-natural__78007.jpg'
import ReelsSection from '../components/ReelsSection'
import PhotoPostCard from '../components/PhotoPostCard'
// import SideNavbar from '../components/SideNavbar'
import FriendRequest from '../components/FriendRequest'
import FriendsOnline from '../components/FirendsOnline'
import FeedPost from '../components/FeedPost'

const HomePageView = () => {
  return (
    <div className='home-page-view'>
      {/* <aside className='side-navbar'>
        <SideNavbar />
      </aside> */}

      <div className='home-page-content'>
        <div className='home-page-header'>
          <ReelsSection />
        </div>

        <div className='home-page-content'>
          <FeedPost />
          <PhotoPostCard />
        </div>
      </div>

      <aside className='side-options-bar'>
        <FriendRequest />
        <FriendsOnline />
      </aside>
    </div>
  )
}

export default HomePageView

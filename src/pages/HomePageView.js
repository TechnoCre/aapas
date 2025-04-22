import React from 'react'
import './pstyles/HomePageView.scss' // Fixed import path
import { Link } from 'react-router-dom'
import { ArrowDropDown, Collections, Diversity2, Group, OndemandVideo, Menu } from '@mui/icons-material'
import img1 from '../assets/images/freepik__the-style-is-candid-image-photography-with-natural__78007.jpg'
import ReelsSection from '../components/ReelsSection'
import PhotoPostCard from '../components/PhotoPostCard'
import SideNavbar from '../components/SideNavbar'
import Notification from '../components/Notification'

const HomePageView = () => {
  return (
    <div className='home-page-view'>
      <aside className='side-navbar'>
        <SideNavbar />
      </aside>

      <div className='home-page-content'>
        <div className='home-page-header'>
          <ReelsSection />
        </div>

        <div className='home-page-content'>
          <PhotoPostCard />
        </div>
      </div>

      <aside className='side-navbar'>
        <Notification />
      </aside>
    </div>
  )
}

export default HomePageView

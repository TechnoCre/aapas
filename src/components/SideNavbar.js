import React, { useState } from 'react';
import { AccountCircleOutlined, AddCircle, AlarmOutlined, Book, Brightness4, Details, EmojiObjectsOutlined, Home, Logout, MeetingRoom, Menu, OndemandVideo, ReportProblem, Save, Search, Settings, TextsmsOutlined, TravelExploreOutlined, WhatshotOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import './styles/SideNavbar.scss';

const SideNavbar = () => {
  const [showOptions, setShowOptions] = useState(false);

  const toggleMenu = () => {
    setShowOptions((prev) => !prev);
  };

  return (
    <div className="nav-menu-bar">
      <ul className="nav-menu-list">
        <li className="nav-menu-item">
          <Link to="/" className="nav-menu-link" aria-label="Home">
            <Home className="nav-menu-icon" />
            <span className="nav-name">Home</span>
          </Link>
        </li>

        <li className="nav-menu-item">
          <Link to="/" className="nav-menu-link" aria-label="Search">
            <Search className="nav-menu-icon" />
            <span className="nav-name">Search</span>
          </Link>
        </li>

        <li className="nav-menu-item">
          <Link to="/" className="nav-menu-link" aria-label="Dive">
            <TravelExploreOutlined className="nav-menu-icon" />
            <span className="nav-name">Dive</span>
          </Link>
        </li>

        <li className="nav-menu-item">
          <Link to="/" className="nav-menu-link" aria-label="Vibez">
            <WhatshotOutlined className="nav-menu-icon" />
            <span className="nav-name">Vibez</span>
          </Link>
        </li>

        <li className="nav-menu-item">
          <Link to="/" className="nav-menu-link" aria-label="Look">
            <OndemandVideo className="nav-menu-icon" />
            <span className="nav-name">Look</span>
          </Link>
        </li>

        <li className="nav-menu-item">
          <Link to="/" className="nav-menu-link" aria-label="Message">
            <TextsmsOutlined className="nav-menu-icon" />
            <span>Message</span>
          </Link>
        </li>

        <li className="nav-menu-item">
          <Link to="/" className="nav-menu-link" aria-label="Notification">
            <EmojiObjectsOutlined className="nav-menu-icon" />
            <span className="nav-name">Notification</span>
          </Link>
        </li>

        <li className="nav-menu-item">
          <Link to="/" className="nav-menu-link" aria-label="Express">
            <AddCircle className="nav-menu-icon" />
            <span className="nav-name">Express</span>
          </Link>
        </li>

        <li className="nav-menu-item">
          <Link to="/" className="nav-menu-link" aria-label="Profile">
            <AccountCircleOutlined className="nav-menu-icon" />
            <span className="nav-name">Profile</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideNavbar;
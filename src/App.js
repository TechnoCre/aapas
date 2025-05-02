// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NavbarMenu from './components/NavbarMenu';
import './App.css';
import HomePageView from './pages/HomePageView';
import ReelsPageView from './pages/ReelsPageView';
import GroupCommunityView from './pages/GroupCommunityView';
import VideoWatchView from './pages/VideoWatchView';
import FriendsPageView from './pages/FriendsPageView';
import EventsPageView from './pages/EventsPageView';
import LoginPageView from './pages/LoginPageView';
import CreateAccountPageView from './pages/CreateAccountPageView';
import ChatPage from './pages/ChatPage';

function App() {
  return (
    <Router>
      <div className="App">
        <NavbarMenu />
        <Routes>
          {/* Redirect root URL to Login Page */}
          <Route path="/" element={<HomePageView />} />
          <Route path="/login" element={<LoginPageView />} />
          <Route path="/create-account" element={<CreateAccountPageView />} />
          <Route path="/home" element={<HomePageView />} />
          <Route path="/reels" element={<ReelsPageView />} />
          <Route path="/videos" element={<VideoWatchView />} />
          <Route path="/group" element={<GroupCommunityView />} />
          <Route path="/friends" element={<FriendsPageView />} />
          <Route path="/events" element={<EventsPageView />} />
          <Route path="/chats" element={<ChatPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

// Components
import NavbarMenu from './components/NavbarMenu';

// Pages
import HomePageView from './pages/HomePageView';
import ReelsPageView from './pages/ReelsPageView';
import GroupCommunityView from './pages/GroupCommunityView';
import VideoWatchView from './pages/VideoWatchView';
import FriendsPageView from './pages/FriendsPageView';
import EventsPageView from './pages/EventsPageView';
import LoginPageView from './pages/LoginPageView';
import CreateAccountPageView from './pages/CreateAccountPageView';
import ChatPage from './pages/ChatPage';
import AdminDashboard from './AdminDashboard';
import UsersDetailsForm from './pages/UsersDetailsForm';
import AccountPage from './pages/AccountPage';

function AppContent() {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if user exists in localStorage
  useEffect(() => {
    const user = localStorage.getItem('user');
    setIsLoggedIn(!!user);
  }, [location.pathname]); // re-check on route change

  return (
    <div className="App">
      {/* Show Navbar only if user is logged in */}
      {isLoggedIn && <NavbarMenu />}
      <Routes>
        <Route path="/" element={<LoginPageView />} />
        <Route path="/login" element={<LoginPageView />} />
        <Route path="/create-account" element={<CreateAccountPageView />} />
        <Route path="/home" element={<HomePageView />} />
        <Route path="/reels" element={<ReelsPageView />} />
        <Route path="/videos" element={<VideoWatchView />} />
        <Route path="/group" element={<GroupCommunityView />} />
        <Route path="/friends" element={<FriendsPageView />} />
        <Route path="/events" element={<EventsPageView />} />
        <Route path="/chats" element={<ChatPage />} />
        <Route path="/users-details" element={<UsersDetailsForm />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="*" element={<div>404 - Page Not Found</div>} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;

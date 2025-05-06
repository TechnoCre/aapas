// src/components/NavbarMenu.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CameraRoll, Diversity2, Home, Menu, Message, Notifications, OndemandVideo, Person, Search } from '@mui/icons-material';
import DropDownButton from './DropDownButton';
import "./styles/NavbarMenu.scss";

const NavbarMenu = () => {
    const [menuActive, setMenuActive] = useState(false);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    return (
        <div className='NavbarMenu'>
            <div className='logo'><span className='logo-name'>Aapas</span></div>

            <div className='search-container'>
                <input type='search' className='search-box' placeholder='Search...' />
                <button className='search-button'><Search className='search' /></button>
            </div>

            <div className='menu-bar' onClick={toggleMenu}><Menu className='menu' /></div>

            <ul className={`nav-list ${menuActive ? 'active' : ''}`}>
                <li className='nav-item'><Link to='/' className="nav-link"><Home className='home-icon icons' /></Link></li>
                <li className='nav-item'><Link to='/reels' className="nav-link"><CameraRoll className='camera-roll-icon icons' /></Link></li>
                {/* <li className='nav-item'><Link to='/videos' className="nav-link"><OndemandVideo className='ondemand-video-icon icons' /></Link></li> */}
                <li className='nav-item'><Link to='/group' className='nav-link'><Diversity2 className='group3-icon icons' /></Link></li>
                <li className='nav-item'><Link to='/friends' className="nav-link"><Person className='person icons' /></Link></li>
                {/* <li className='nav-item'><Link to='/login' className="nav-link">Login</Link></li> */}
                {/* <li className='nav-item'><Link to='/create-account' className="nav-link">Create Account</Link></li> */}
                <li className='nav-item'><Link to='/users-details' className="nav-link">User Details</Link></li>
            </ul>

            <ul className={`nav-list ${menuActive ? 'active' : ''}`}>
                <li className='nav-item'><Link to='/chats' className='nav-link'><Message className='message-icon icons' /></Link></li>
                <li className='nav-item'><Link to='/notifications' className="nav-link"><Notifications className='notifications-icon icons' /></Link></li>
                <li className='nav-item'>
                    <DropDownButton />
                </li>
            </ul>
        </div>
    );
};

export default NavbarMenu;

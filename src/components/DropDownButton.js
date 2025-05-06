import React, { useState } from 'react';
import { Menu, MenuItem } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import './styles/DropDownButton.scss';

const DropDownButton = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const navigate = useNavigate();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleProfileClick = () => {
        handleClose(); // Close the dropdown
        navigate('/account'); // Navigate to the Account Page
    };

    const handleLogout = () => {
        // Clear user session
        localStorage.removeItem('user');
        alert('You have been logged out.');
        navigate('/login'); // Redirect to login page
    };

    return (
        <div className='DropDownButton'>
            <AccountCircle className='account-icon' onClick={handleClick} />
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleProfileClick}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
        </div>
    );
};

export default DropDownButton;

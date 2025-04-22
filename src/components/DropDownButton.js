import React, { useState } from 'react';
import { Menu, MenuItem } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import './styles/DropDownButton.scss';

const DropDownButton = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className='DropDownButton'>
            <AccountCircle className='account-icon' onClick={handleClick} />
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
        </div>
    );
};

export default DropDownButton;

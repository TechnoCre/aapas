const express = require('express');
const UserDetails = require('../models/UsersDetailsInformation'); // Corrected model import
const router = express.Router();

// Save or update user details
router.post('/save', async (req, res) => {
    const { email, name, phone, dob, skills, qualities, work, bio, profileImage, coverImage } = req.body;

    try {
        // Check if user details already exist
        const existingUser = await UserDetails.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User details already exist. Please update instead.' });
        }

        // Save new user details
        const user = new UserDetails({ email, name, phone, dob, skills, qualities, work, bio, profileImage, coverImage });
        await user.save();
        res.status(201).json({ message: 'User details saved successfully', user });
    } catch (error) {
        res.status(500).json({ message: 'Failed to save user details', error: error.message });
    }
});

// Get all users
router.get('/', async (req, res) => {
    try {
        const users = await UserDetails.find(); // Fetch all users
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Failed to retrieve users', error: error.message });
    }
});

// Get user details by email
router.get('/:email', async (req, res) => {
    const { email } = req.params;

    try {
        const user = await UserDetails.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user); // Return user-specific data
    } catch (error) {
        res.status(500).json({ message: 'Failed to retrieve user details', error: error.message });
    }
});

// Check if user details exist by email
router.get('/exists/:email', async (req, res) => {
    const { email } = req.params;

    try {
        const user = await UserDetails.findOne({ email });
        if (user) {
            return res.status(200).json({ exists: true });
        }
        res.status(200).json({ exists: false });
    } catch (error) {
        res.status(500).json({ message: 'Failed to check user details', error: error.message });
    }
});

// Update user details by ID
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { email, ...updatedData } = req.body; // Exclude email from being updated

    try {
        const user = await UserDetails.findByIdAndUpdate(id, updatedData, { new: true });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User updated successfully', user });
    } catch (error) {
        res.status(500).json({ message: 'Failed to update user', error: error.message });
    }
});

// Update user details by email
router.put('/update/:email', async (req, res) => {
    const { email } = req.params;
    const updatedData = req.body;

    try {
        const user = await UserDetails.findOneAndUpdate({ email }, updatedData, { new: true });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User updated successfully', user });
    } catch (error) {
        res.status(500).json({ message: 'Failed to update user', error: error.message });
    }
});

// Delete user by ID
router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const user = await UserDetails.findByIdAndDelete(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete user', error: error.message });
    }
});

module.exports = router;
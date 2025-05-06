const express = require('express');
const UserDetails = require('../models/UsersDetailsInformation');
const FriendRequest = require('../models/FriendRequest'); // Assuming a FriendRequest model exists
const router = express.Router();

// Get all users
router.get('/', async (req, res) => {
    try {
        const users = await UserDetails.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch users', error: error.message });
    }
});

// Send friend request
router.post('/request', async (req, res) => {
    const { senderId, receiverEmail } = req.body;

    try {
        // Find the receiver by email
        const receiver = await UserDetails.findOne({ email: receiverEmail });
        if (!receiver) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Check if a friend request already exists
        const existingRequest = await FriendRequest.findOne({
            sender: senderId,
            receiver: receiver._id,
        });
        if (existingRequest) {
            return res.status(400).json({ message: 'Friend request already sent' });
        }

        // Create a new friend request
        const friendRequest = new FriendRequest({
            sender: senderId,
            receiver: receiver._id,
        });
        await friendRequest.save();

        res.status(200).json({ message: 'Friend request sent successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to send friend request', error: error.message });
    }
});

// Cancel friend request
router.delete('/request', async (req, res) => {
    const { senderId, receiverEmail } = req.body;

    try {
        // Find the receiver by email
        const receiver = await UserDetails.findOne({ email: receiverEmail });
        if (!receiver) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Find and delete the friend request
        const result = await FriendRequest.findOneAndDelete({
            sender: senderId,
            receiver: receiver._id,
        });
        if (!result) {
            return res.status(404).json({ message: 'Friend request not found' });
        }

        res.status(200).json({ message: 'Friend request canceled successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to cancel friend request', error: error.message });
    }
});

module.exports = router;


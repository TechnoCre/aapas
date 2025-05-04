const express = require('express');
const User = require('../models/Registeruser'); // Ensure this path is correct
const router = express.Router();

router.post('/register', async (req, res) => {
    const { name, email, phone_number, password } = req.body;

    try {
        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already in use' });
        }

        // Create a new user
        const newUser = new User({
            name,
            email,
            phone_number,
            password,
        });

        // Save the user to the database
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

module.exports = router;
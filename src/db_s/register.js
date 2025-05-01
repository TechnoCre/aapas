const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('./userModel'); // Import the User model

const router = express.Router();

// Route to handle user registration
router.post('/register', async (req, res) => {
  const { email, phone_number, password, cpassword } = req.body;

  // Validate input fields
  if (!email || !phone_number || !password || !cpassword) {
    return res.status(400).send('All fields are required.');
  }

  if (password !== cpassword) {
    return res.status(400).send('Passwords do not match.');
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create a new user document
  const newUser = new User({ email, phone_number, password: hashedPassword });

  try {
    // Save the user to the database
    await newUser.save();
    res.status(201).send('User registered successfully!');
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).send('Email already exists.');
    } else {
      res.status(500).send('Error registering user.');
    }
  }
});

module.exports = router; // Export the router
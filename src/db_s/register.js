const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('./UserModel'); // Import the User model

const router = express.Router();

// Route to handle user registration
router.post('/register', async (req, res) => {
  const { email, phone_number, password, cpassword } = req.body;

  // Validate input fields
  if (!email || !phone_number || !password || !cpassword) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  if (password !== cpassword) {
    return res.status(400).json({ message: 'Passwords do not match.' });
  }

  try {
    // Check if the email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists.' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user document
    const newUser = new User({ email, phone_number, password: hashedPassword });

    // Save the user to the database
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully!' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Error registering user.' });
  }
});

module.exports = router;
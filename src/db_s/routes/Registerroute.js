const express = require('express');
const User = require('./models/Registeruser'); 
const router = express.Router();

router.post('/register', async (req, res) => {
  const { name, email, phone_number, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already in use' });
    }

   
    const newUser = new User({
      name,
      email,
      phone_number,
      password,
    });

   
    await newUser.save();

  
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;

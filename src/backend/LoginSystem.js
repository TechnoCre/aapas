const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const registerRoutes = require('../db_s/register'); // Import registration routes
const User = require('../db_s/userModel'); // Import the User model

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/myapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB database "myapp"'))
  .catch((error) => console.log('MongoDB connection error:', error));

// JWT Secret Key
const JWT_SECRET = 'your_jwt_secret_key';

// Use the registration routes
app.use('/api', registerRoutes);

// Route to handle user login
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Validate input fields
  if (!email || !password) {
    return res.status(400).send('Email and password are required.');
  }

  try {
    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send('Invalid email or password.');
    }

    // Compare the password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send('Invalid email or password.');
    }

    // Generate a JWT token
    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ message: 'Login successful!', token });
  } catch (error) {
    res.status(500).send('Error logging in.');
  }
});

// Middleware to authenticate JWT tokens
const authenticate = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(401).send('Access denied. No token provided.');
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).send('Invalid token.');
  }
};

// Protected route (example)
app.get('/dashboard', authenticate, (req, res) => {
  res.send(`Welcome to the dashboard, user ID: ${req.user.id}`);
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
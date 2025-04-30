const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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

// Define a schema for user accounts
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  phone_number: { type: String, required: true },
  password: { type: String, required: true },
});

// Create a model based on the schema
const User = mongoose.model('User', userSchema);

// Route to handle user registration
app.post('/register', async (req, res) => {
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
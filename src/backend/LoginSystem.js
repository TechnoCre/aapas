const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const registerRoutes = require('../db_s/register'); // Import registration routes

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

// Use the registration routes
app.use('/api', registerRoutes);

// Start the Express server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
// index.js
const express = require('express');
const connectDB = require('../db_s/db'); // Updated path to match the correct location
const userRoutes = require('../db_s/routes/User'); // Updated path to match the correct location

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());

// Connect to MongoDB
connectDB().then(() => {
  // Start the server only after a successful DB connection
  app.listen(PORT, () => {
    console.log(`🚀 Server started on http://localhost:${PORT}`);
  });
});

// Routes
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.send('API is running and my name is rahul dabral');
});

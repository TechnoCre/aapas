const express = require('express');
const cors = require('cors');
const connectDB = require('../db_s/db');
const registerRoutes = require('../db_s/routes/Registerroute');
const userRoutes = require('../db_s/routes/User');
const loginRoutes = require('../db_s/routes/Loginroute'); // Added login route

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
});

// Routes
app.use('/api/register', registerRoutes);
app.use('/api/users', userRoutes);
app.use('/api/login', loginRoutes); // Added login route
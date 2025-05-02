const { app, connectDB, startServer } = require('../server'); // Import global server setup
const registerRoutes = require('../db_s/register'); // Import registration routes

// Use the registration routes
app.use('/api', registerRoutes);

// Connect to the database and start the server
const PORT = 3000;
connectDB().then(() => startServer(PORT));
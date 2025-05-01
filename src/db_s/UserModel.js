const mongoose = require('mongoose');

// Define a schema for user accounts
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  phone_number: { type: String, required: true },
  password: { type: String, required: true },
});

// Create and export the User model
const User = mongoose.model('User', userSchema);
module.exports = User;
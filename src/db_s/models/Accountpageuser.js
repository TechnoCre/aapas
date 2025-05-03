const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  profileImage: {
    type: String,
    default: 'https://i.pravatar.cc/150?img=3',
  },
  coverImage: {
    type: String,
    default: 'https://via.placeholder.com/800x200',
  },
  bio: {
    type: String,
    default: '',
  },
  joined: {
    type: Date,
    default: Date.now,
  },
  friends: {
    type: Number,
    default: 0,
  },
  mutualFriends: {
    type: Number,
    default: 0,
  },
  gallery: {
    type: [String],
    default: [],
  },
});

module.exports = mongoose.model('User ', userSchema);
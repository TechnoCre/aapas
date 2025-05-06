const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true }, // Email is unique
    phone: { type: String, required: true },
    dob: { type: String, required: true },
    skills: { type: String, required: true },
    qualities: { type: String, required: true },
    work: { type: String, required: true },
    bio: { type: String, required: true },
    profileImage: { type: String, required: false },
    coverImage: { type: String, required: false },
}, { timestamps: true });

module.exports = mongoose.model('UserDetails', userSchema);
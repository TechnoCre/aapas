// models/User.js
const mongoose = require('mongoose');
const bcrypt = require('bcrypt'); 

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
  phone_number: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (v) {
        return /^\d{10}$/.test(v); // Example: 10-digit phone number
      },
      message: props => `${props.value} is not a valid phone number!`,
    },
  },
  password: {
    type: String,
    required: true,
  },
});


userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next(); 
  const salt = await bcrypt.genSalt(10); 
  this.password = await bcrypt.hash(this.password, salt); 
  next();
});


userSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', userSchema);
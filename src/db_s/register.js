const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // To handle JSON data

// MongoDB connection to the manually created 'myapp' database
mongoose.connect('mongodb://localhost:27017/myapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB database "myapp"'))
.catch((error) => console.log('MongoDB connection error:', error));

// Define a schema for storing form data
const formSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  phone_number: { type: String, required: true },
  password: { type: String, required: true }
});

// Create a model based on the schema
const FormData = mongoose.model('FormData', formSchema);

// Route to handle form submission
app.post('/submit', async (req, res) => {
  const { email, phone_number, password, cpassword } = req.body;

  // Validate input fields
  if (!email || !phone_number || !password || !cpassword) {
    return res.status(400).send('All fields are required.');
  }

  if (password !== cpassword) {
    return res.status(400).send('Passwords do not match.');
  }

  // Create a new document in the FormData collection
  const newFormData = new FormData({ email, phone_number, password });

  try {
    // Save the form data to the database (it will automatically create the "FormData" collection)
    await newFormData.save();
    res.send('Form data submitted successfully!');
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).send('Email already exists.');
    } else {
      res.status(500).send('Error saving data');
    }
  }
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

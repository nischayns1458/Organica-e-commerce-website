const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();
const asyncHandler = require('express-async-handler');

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.post('/api/contact', async (req, res) => {
  const { email, message } = req.body;
  try {
    // Assuming your model is named Contact and file is named contact.js
    const newContact = new Contact({ email, message });
    await newContact.save();
    res.status(200).json({ message: 'Contact saved successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save contact' });
  }
});

// Assuming you have a separate route file for user-related routes
app.use('/api/users', userRoutes);

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});

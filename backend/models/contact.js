const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  email: { type: String, required: true },
  message: { type: String, required: true }
});

module.exports = mongoose.model('Contact', contactSchema);

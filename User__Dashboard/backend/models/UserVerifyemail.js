const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  // Existing fields...
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  username: String,
  verificationToken: String,
  isVerified: { type: Boolean, default: true },
});

module.exports = mongoose.model('userregisters', userSchema);

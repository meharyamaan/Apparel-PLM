const crypto = require('crypto');
const nodemailer = require('nodemailer');
const User = require('../models/UserVerifyemail.js');

const registerUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password, username } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already exists' });
    }

    const verificationToken = crypto.randomBytes(20).toString('hex');

    const newUser = new User({
      firstName,
      lastName,
      email,
      password,
      username,
      verificationToken,
    });

    await newUser.save();

    sendVerificationEmail(email, verificationToken);

    return res.status(201).json({ msg: 'User registered successfully. Check your email for verification.' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

const sendVerificationEmail = (email, token) => {
    // Replace these values with your email service provider's details
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'webarcadestore@gmail.com', // Replace with your email address
        pass: 'tcroykzxkfvwqlge', // Replace with your email password
      },
    });
  
    const verificationLink = `http://localhost:3000//verify/${token}`;
  
    const mailOptions = {
      from: 'webarcadestore@gmail.com', // Replace with your email address
      to: email,
      subject: 'Email Verification',
      html: `<p>Please click the following link to verify your email:</p><a href="${verificationLink}">${verificationLink}</a>`,
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending verification email:', error);
      } else {
        console.log('Verification email sent:', info.response);
      }
    });
  };

module.exports = {
  registerUser,
};

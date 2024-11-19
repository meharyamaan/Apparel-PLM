const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require('../models/User.model.js');
const UserRegisterModel = require('../models/UserVerifyemail.js');
const ENV = require('../config.js');
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client('1072306097003-4ni1r4egjla5p5aaanah2liu1aid31tj.apps.googleusercontent.com');


const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserRegisterModel.findOne({ email });
    console.log(email);

    if (!user) {
      return res.status(404).send({ error: 'Username not found' });
    }

    console.log('Username Matched');

    // Check the password
    if (!password || password !== user.password) {
      return res.status(400).send({ error: 'Invalid user or password' });
    }
    const token = jwt.sign(
      {
        userId: user._id,
        email: user.email,
      },
      ENV.JWT_SECRET,
      { expiresIn: '1h' } 
    );

    return res.status(200).send({
      msg: 'Login successful',
      email: user.email,
      token,
    });

  } catch (error) {
    console.error(error);
    return res.status(500).send({ error: 'Internal server error' });
  }
};


const verifyUser = async (req, res, next) =>{
  try {
    const { username } = req.method === 'GET' ? req.query : req.body;
    const exist = await UserModel.findOne({ username });
    if (!exist) {
      return res.status(404).send({ error: "Can't find user!" });
    }
    req.user = exist;
    next();
  } catch (error) {
    return res.status(500).send({ error: 'Authentication Error' });
  }
}
const get_User_Email = async (req, res) => {
  try {
    // Replace this with your actual logic to get the user's email dynamically
    // For demonstration purposes, let's assume you have the user's username in the request session
    const username = "ahmadidrees273@gmail.com";

    // Find the user by username in the database
    const user = await UserRegisterModel.findOne({ username });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const userEmail = user.email || 'ahmadidrees273@gmail.com';

    res.json({ email: userEmail });
  } catch (error) {
    console.error('Error fetching user email:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
const register = async (req, res) => {
  try {
    const { firstName, lastName, email, password, username } = req.body;

    // Check for existing username
    const existUsername = await UserRegisterModel.findOne({ username });
    if (existUsername) {
      return res.status(400).json({ error: 'Username already exists. Please choose a unique username.' });
    }

    // Check for existing email
    const existEmail = await UserRegisterModel.findOne({ email });
    if (existEmail) {
      return res.status(400).json({ error: 'Email address already registered. Please use a unique email.' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new UserRegisterModel({
      username,
      password: hashedPassword,
      firstName,
      lastName,
      email,
    });

    // Save the user to the database
    await newUser.save();

    // Send a success response
    res.status(201).json({ msg: 'User registered successfully' });
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
const fetchUserData = async (req, res) => {
  const { email } = req.query;

  try {
    const userData = await UserRegisterModel.findOne({ email });

    if (!userData) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(userData);
  } catch (error) {
    console.error('Error fetching User Data:', error.message);
    res.status(500).send('Server Error');
  }
};

const updateUserData =  async (req, res) => {
  const { username, updatedUserData } = req.body;

  try {
    const user = await UserRegisterModel.findOne({ username });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Update user data in the database
    user.firstName = updatedUserData.firstName || user.firstName;
    user.lastName = updatedUserData.lastName || user.lastName;
    user.email = updatedUserData.email || user.email;
    user.password = updatedUserData.password || user.password;

    // Save the updated user data
    await user.save();

    // Return the updated user data (you can customize this response)
    res.json({ message: 'User data updated successfully', updatedUserData: user });
  } catch (error) {
    console.error('Error updating user data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
const ResetPassword  = async (req, res) => {
  console.log('ResetPassword route reached');
  const { userEmail, newPassword, confirmPassword } = req.body;

  try {
    if (!userEmail || !newPassword || !confirmPassword) {
      return res.status(400).send({ error: 'All fields are required' });
    }
    if (newPassword !== confirmPassword) {
      return res.status(400).send({ error: 'Passwords do not match' });
    }
    const user = await UserRegisterModel.findOne({ email: userEmail });

    if (!user) {
      return res.status(404).send({ error: 'User not found' });
    }
    user.password = newPassword; 
    await user.save();

    return res.status(200).send({ message: 'Password reset successful' });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ error: 'Internal server error' });
  }
};
const googleLogin = async (req, res) => {
  console.log('Google login route reached');
  try {
    const { tokenId } = req.body;
    const ticket = await client.verifyIdToken({
      idToken: tokenId,
      audience: '1072306097003-4ni1r4egjla5p5aaanah2liu1aid31tj.apps.googleusercontent.com', 
    });
    const payload = ticket.getPayload();
    const { email, given_name, family_name } = payload;
    const existingUser = await UserRegisterModel.findOne({ email });

    if (existingUser) {
      return res.status(200).json({ message: 'User already exists' });
    }
    const newUser = new UserRegisterModel({
      firstName: given_name,
      lastName: family_name,
      email,
      isVerified: true,
      password: '',
      username: given_name + '_' + family_name,
    });
    await newUser.save();
    res.status(200).json({ message: 'Google login successful', user: newUser });
  } catch (error) {
    console.error('Google login error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  login,
  verifyUser,
  register,
  fetchUserData,
  updateUserData,
  get_User_Email,
  ResetPassword,
  googleLogin
};
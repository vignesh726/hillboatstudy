const jwt = require('jsonwebtoken');
const User = require('../models/User');
const InMemoryUser = require('../models/InMemoryUser');
const { isMongoConnected } = require('../config/database');

const getUser = () => isMongoConnected() ? User : InMemoryUser;

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '7d' });
};

const register = async (req, res) => {
  try {
    const { email, password, firstName, lastName, dateOfBirth, address, role } = req.body;
    
    const userData = {
      email,
      password,
      firstName,
      lastName,
      dateOfBirth,
      address,
      role
    };

    if (req.files) {
      if (req.files.image) {
        userData.image = req.files.image[0].path;
      }
      if (req.files.file) {
        userData.file = req.files.file[0].path;
      }
    }
    
    if (isMongoConnected()) {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ success: false, message: 'User already exists' });
      }
      
      const user = await User.create(userData);
      const token = generateToken(user._id);
      
      res.status(201).json({
        success: true,
        token,
        user: {
          _id: user._id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          dateOfBirth: user.dateOfBirth,
          address: user.address,
          image: user.image,
          file: user.file,
          role: user.role,
          createdAt: user.createdAt
        }
      });
    } else {
      const existingUser = await InMemoryUser.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ success: false, message: 'User already exists' });
      }
      
      const user = await InMemoryUser.create(userData);
      const token = generateToken(user._id);
      
      res.status(201).json({
        success: true,
        token,
        user: {
          _id: user._id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          dateOfBirth: user.dateOfBirth,
          address: user.address,
          image: user.image,
          file: user.file,
          role: user.role,
          createdAt: user.createdAt
        }
      });
    }
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    if (isMongoConnected()) {
      const user = await User.findOne({ email });
      if (!user || !(await user.comparePassword(password))) {
        return res.status(401).json({ success: false, message: 'Invalid credentials' });
      }
      
      const token = generateToken(user._id);
      
      res.json({
        success: true,
        token,
        user: {
          _id: user._id,
          email: user.email,
          role: user.role,
          createdAt: user.createdAt
        }
      });
    } else {
      const user = await InMemoryUser.findOne({ email });
      if (!user || !(await InMemoryUser.comparePassword(password, user.password))) {
        return res.status(401).json({ success: false, message: 'Invalid credentials' });
      }
      
      const token = generateToken(user._id);
      
      res.json({
        success: true,
        token,
        user: {
          _id: user._id,
          email: user.email,
          role: user.role,
          createdAt: user.createdAt
        }
      });
    }
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = { register, login };
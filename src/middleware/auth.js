const jwt = require('jsonwebtoken');
const User = require('../models/User');
const InMemoryUser = require('../models/InMemoryUser');
const { isMongoConnected } = require('../config/database');

const getUser = () => isMongoConnected() ? User : InMemoryUser;

const authenticateToken = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];
    
    if (!token) {
      return res.status(401).json({ success: false, message: 'Access token required' });
    }
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const UserModel = getUser();
    
    const user = isMongoConnected()
      ? await UserModel.findById(decoded.id).select('-password')
      : await UserModel.findById(decoded.id);
    
    if (!user) {
      return res.status(401).json({ success: false, message: 'User not found' });
    }
    
    if (!isMongoConnected()) {
      delete user.password;
    }
    
    req.user = user;
    next();
  } catch (error) {
    res.status(403).json({ success: false, message: 'Invalid token' });
  }
};

const requireRole = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ success: false, message: 'Access denied' });
    }
    next();
  };
};

module.exports = { authenticateToken, requireRole };
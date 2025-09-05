const User = require('../models/User');
const InMemoryUser = require('../models/InMemoryUser');
const { isMongoConnected } = require('../config/database');

const getUser = () => isMongoConnected() ? User : InMemoryUser;

const getAllUsers = async (req, res) => {
  try {
    if (isMongoConnected()) {
      const users = await User.find().select('-password');
      res.json({ success: true, users });
    } else {
      const users = (await InMemoryUser.find()).map(u => ({ ...u, password: undefined }));
      res.json({ success: true, users });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getUserProfile = async (req, res) => {
  try {
    res.json({ success: true, user: req.user });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    if (isMongoConnected()) {
      await User.findByIdAndDelete(id);
    } else {
      await InMemoryUser.findByIdAndDelete(id);
    }
    res.json({ success: true, message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { getAllUsers, getUserProfile, deleteUser };
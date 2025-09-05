const express = require('express');
const { getAllUsers, getUserProfile, deleteUser } = require('../controllers/userController');
const { authenticateToken, requireRole } = require('../middleware/auth');

const router = express.Router();

router.get('/', authenticateToken, requireRole('admin'), getAllUsers);
router.get('/profile', authenticateToken, getUserProfile);
router.delete('/:id', authenticateToken, requireRole('admin'), deleteUser);

module.exports = router;
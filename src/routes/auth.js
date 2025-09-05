const express = require('express');
const { register, login } = require('../controllers/authController');
const upload = require('../middleware/upload');

const router = express.Router();

router.post('/register', upload.fields([{ name: 'image', maxCount: 1 }, { name: 'file', maxCount: 1 }]), register);
router.post('/login', login);

module.exports = router;
const express = require('express');
const router = express.Router();
const { login, register, profile } = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');
 
router.post('/register', register);
router.post('/login', login);
router.get('/profile', authMiddleware, profile);

module.exports = router;



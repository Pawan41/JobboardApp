const express = require('express');
const router = express.Router();
const { signup ,signin , logout, userProfile} = require('../controllers/authController');
const { isAuthenticated } =require('../middleware/auth');

/* --- Auth Routes */

//SignUp Routes 
router.post('/signup', signup);

//SignIn Routes 
router.post('/signin', signin);

//Logout Routes 
router.get('/logout', logout);

//userProfile Routes 
router.get('/me',isAuthenticated, userProfile);

module.exports = router;
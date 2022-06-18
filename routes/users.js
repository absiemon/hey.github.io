const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController');   // accessing the controller

router.get('/profile', userController.profile);  // getting the profile controller form the userController
router.get('/login', userController.login);  // getting the login controller form the userController
router.get('/sign-up', userController.signUp);  // getting the signUp controller form the userController


module.exports = router;
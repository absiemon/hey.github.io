const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController');   // accessing the controller

router.get('/profile', userController.profile);  // getting the profile

module.exports = router;
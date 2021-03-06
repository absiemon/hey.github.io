const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController');   // accessing the controller

router.get('/profile', userController.profile);  // getting the profile controller form the userController
router.get('/login', userController.login);  // getting the login controller form the userController
router.get('/sign-up', userController.signUp);  // getting the signUp controller form the userController

router.post('/create', userController.create); // getting the create controller from the userController(/create is the action route in the signUp form)

router.post('/create-session', userController.createSession); // getting the createSession controller from the userController

router.post('/sign-out', userController.signOut);

module.exports = router;
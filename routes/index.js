const express = require('express');

const router = express.Router();  // its is a module taht seperates app route and controller function

// adding the controller
const homeController = require('../controllers/homeController')

console.log("routers are running");

router.get('/', homeController.home);

module.exports = router;  // i need to exports so that it is to be available for the index.js(main).
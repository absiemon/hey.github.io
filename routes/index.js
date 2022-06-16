const express = require('express');

const router = express.Router();  // its is a module taht seperates app route and controller function

// adding the controller
const homeController = require('../controllers/homeController')

console.log("routers are running");

router.get('/', homeController.home);

// if i want to make this index.js root of all the routes we can do this by
router.use('/users', require('./users'));   // whenever any request comes with /users it requires users


//for more further routes
// router.use('/routerName', 'require('./routerfile'));


module.exports = router;  // i need to exports so that it is to be available for the index.js(main).
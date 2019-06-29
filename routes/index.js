const express = require('express');
const router = express.Router();
const PagesController = require('../controllers/PagesController');
const ApplicationController = require('../controllers/ApplicationController');

//@route '/'
//@desc GET home page
//@access Public
router.get('/', PagesController.home);

//@route '/'
//@desc GET contact page
//@access Public
router.get('/contact', PagesController.contact);

//@route '/newsletter'
//@desc form page
//@access Public
router.get('/newsletter', PagesController.newsletter);

//@route '/register'
//@desc register to newsletter
//@access Public
router.post('/register', ApplicationController.registerToNewsletter);

module.exports = router;

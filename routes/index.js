const express = require('express');
const router = express.Router();
const PagesController = require('../controllers/PagesController');

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

//

router.post('/', (req, res) => {
	const { firstName, lastName } = req.body;
	res.status(201).json({
		firstName,
		lastName,
		request: {
			url: req.url,
			path: req.path,
			params: req.params,
		},
	});
});

module.exports = router;

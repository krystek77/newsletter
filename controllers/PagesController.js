//home controller
exports.home = (req, res) => {
	const time = req.time;
	res.render('home', {
		title: 'Do not think too much and often',
		message: 'give yourself a chance, just hire me as a programmer',
		time,
	});
};

//contact controller
exports.contact = (req, res) => {
	const time = req.time;
	// console.log(time);
	res.render('contact', { title: 'Contact Page', message: "Let's talk...", time });
};

//newsletter controller
exports.newsletter = (req, res) => {
	const time = req.time;
	res.render('newsletter', { title: 'Newsletter', message: 'Be up to date', time });
};

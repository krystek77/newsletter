exports.registerToNewsletter = (req, res, next) => {
	const time = req.time;
	const { name, email } = req.body;
	res.status(201).json({ name, email, time });
};

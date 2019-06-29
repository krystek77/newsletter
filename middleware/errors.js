exports.notFound = (req, res, next) => {
	const error = new Error('Page not found');
	error.time = req.time;
	error.status = 404;
	next(error);
};
//Pass all errors and handle them though below function
exports.catchErrors = (error, req, res, next) => {
	res.status(error.status || 500);
	res.render('error', {
		message: error.message,
		status: error.status,
		time: error.time,
	});
};

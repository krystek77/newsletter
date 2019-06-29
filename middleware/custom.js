exports.reqTime = (req, res, next) => {
	console.log('Request time');
	req.time = new Date().toLocaleString();
	next();
};

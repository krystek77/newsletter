require('dotenv').config({ path: '.env' });

const http = require('http');
const app = require('./app');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 5000;

const server = http.createServer(app).listen(PORT, () => {
	console.log(`Server running on port ${server.address().port}`);
});

mongoose
	.connect(
		`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${
			process.env.DB_NAME
		}-ghqyf.mongodb.net/test?retryWrites=true&w=majority`,
		{ useNewUrlParser: true }
	)
	.then(connect => {
		console.log('Connected to database successfully');
	})
	.catch(error => {
		console.log('The connection to the database failed');
	});

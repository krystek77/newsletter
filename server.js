const http = require('http');
const app = require('./app');

const PORT = process.env.PORT || 4000;

const server = http.createServer(app).listen(PORT, () => {
	console.log(`Server running on port ${server.address().port}`);
});


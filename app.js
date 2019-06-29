const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const router = require('./routes/index.js');
const errorsHandler = require('./middleware/errors');
const customMiddlewareHandler = require('./middleware/custom');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(customMiddlewareHandler.reqTime);
app.use('/', router);

app.use(errorsHandler.notFound);
app.use(errorsHandler.catchErrors);

module.exports = app;

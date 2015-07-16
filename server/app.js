/**
 * Main application file
 */

'use strict';

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');
var mongoose = require('mongoose');
var config = require('./config/environment');

// Connect to database
mongoose.connect(config.mongo.uri, config.mongo.options);

// Populate DB with sample data
if(config.seedDB) { require('./config/seed'); }

// Setup server
var app = express();

var server = require('http').createServer(app);
require('./config/express')(app);
//require('./routes')(app);

app.all('/*', function(req, res, next) {
	// CORS headers
	res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
	// Set custom headers for CORS
	res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
	if (req.method == 'OPTIONS') {
		res.status(200).end();
	} else {
		next();
	}
});

app.all('/api/v1/*', [require('./middlewares/validateRequest')]);
//app.use('/', require('./routes'));
require('./routes')(app);
/*
app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
next()ext(err);
});*/

// Start server
server.listen(config.port, config.ip, function () {
  console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
});

// Expose app
exports = module.exports = app;

//curl -H "content-type:application/json" -H "x-access-token:eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE0Mzc2NzkyNTc3NDF9.q8hX-m3RA4eUfuR5Doo6CvRKnzMlwBO6a-rqdx6cG_g" -H "x-key:arvind@myapp.com" http://localhost:9000/api/v1/products



'use strict';

// Import our express and our configuration
var express = require('express');
var configure = require('./config.js');

// Import our controllers
var indexControllers  = require('./controllers/index.js');
var reportControllers = require('./controllers/reports.js');

// Create our express app
var app = express();

// import all reports
var reports = require('./models/reports');

// Configure it
configure(app);

// Add routes mapping URLs to controllers
app.get('/', indexControllers.index);
app.get('/reports/:id' , reportControllers.reportDetail);

module.exports = app;
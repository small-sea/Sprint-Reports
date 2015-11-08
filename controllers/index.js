'use strict';

/**
 * Controller that renders our index (home) page.
 */
 
var reports = require('../models/reports'); 

function index (request, response) {
  var currentTime = new Date();
  var contextData = {
    'title': 'Small-Sea Sprint reports',
    'time': currentTime,
    'reports': reports.all
  };
  response.render('index.html', contextData);
}

module.exports = {
  index: index
};
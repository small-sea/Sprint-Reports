'use strict';

var reports = require('../models/reports');

var functionality = 
{
    1: 'You can create an event',
    2: 'Event creation has "memory" if field is valid',
    3: 'People can RSVP (only from Yale)',
    4: 'You can view out list of events'
}

var tests =
{
    1: 'The site should be using Bootstrap CSS',
    2: 'The site should have a header element',
    3: 'The site should have a footer element',
    4: 'The site should have a link to /about in the footer',
    5: 'The site should have a link to / in the footer',
    6: 'The home page should be up and running',
    7: 'The home page should have your team logo',
    8: 'The home page should have a list of events',
    9: 'The home page should have a time tag for each event',
    10: 'The home page should have a link for each event',
    11: 'The home page should not show events that are over',
    12: 'The home page should have a link to create a new event',
  
    13: 'The API should return an array of upcoming events in JSON format',
    14: 'The API should allow for searching events by title',
   
   
    15: 'The about pages hould have people on it',
    16: 'The about page should have a picture of each person',
   
    17: 'The event detail pagesshould exist for each event and should have title, image, etc',
    18: 'The event detail pages should allow Yale users to RSVP',
    19: 'The event detail pages should reject RSVPs from Yale addresses',
   
    20: 'The new event creation page should exist',
    21: 'The new event creation page should have a form that can be posted back',
    22: 'The new event creation page should have appropriate form fields and labels',
    23: 'The new event creation page should display errors to the user when the year is not an integer',
    24: 'The new event creation page should display errors to the user when the year is more than 2016',
    25: 'The new event creation page should display errors to the user when the year is less than 2015',
    26: 'The new event creation page should display errors to the user when the month is not an integer',
    27: 'The new event creation page should display errors to the user when the month is more than 11',
    28: 'The new event creation page should display errors to the user when the month is less than 0',
    29: 'The new event creation page should display errors to the user when the day is not an integer',
    30: 'The new event creation page should display errors to the user when the day is more than 31',
    31: 'The new event creation page should display errors to the user when the day is less than 1',
    32: 'The new event creation page should display errors to the user when the hour is not an integer',
    33: 'The new event creation page should display errors to the user when the hour is more than 23',
    34: 'The new event creation page should display errors to the user when the hour is less than 0',
    35: 'The new event creation page should display errors to the user when the image is not a gif or png',
    36: 'The new event creation page should display errors to the user when the image is not a URL',
    37: 'The new event creation page should display errors to the user when the location is too long',
    38: 'The new event creation page should display errors to the user when the location is empty',
    39: 'The new event creation page should display errors to the user when the title is too long',
    40: 'The new event creation page should display errors to the user when the title is empty',
    41: 'The new event creation page should redirect the user to the event detail page if the form is valid',
    42: 'The home page before all" hook for "should have a link to / in the footer'
};

function reportDetail (request, response) {
  var rep = reports.getById(parseInt(request.params.id,10));
  if (rep === null) {
    response.status(404).send('No such report');
  }
  if (rep.link === 'reports/')
  {
    var contextData = {
        title: 'Small-Sea Sprint reports site',
        report: rep,
        tests: tests,
        functionality: functionality
    };
    //response.render('sprint'+ rep.id +'.html', contextData);
    response.render('sprintRep.html', contextData);
  }
  else
  {
      response.redirect(rep.link);
  }
}
module.exports = {
  reportDetail: reportDetail
};
'use strict';

/**
 * An Array of all the events
 */
var allReports = [
  {
    // Note that JavaScript months are zero-indexed,
    // so, month zero is January. This is Jan 17th
    // 2013 at 4:30pm local time.
    id: 1,
    date:   new Date(2015, 9, 26, 13, 0, 0),
    link: 'https://docs.google.com/document/d/1XFoA0zzvZIeoGFMn5h4WqWRhdZzzndfhfoOIx1iRZR8/edit?usp=sharing',
    functionality: [],
    tests: [],
    todo: []
  },
  {
    id: 2,
    date:   new Date(2015, 10, 2, 13, 0, 0),
    link: 'https://docs.google.com/document/d/1MmybbEWV9suHhjL_ie3x0Xasq0Vfpax-DOwR-RtfBL0/edit?usp=sharing',
    functionality: [],
    tests: [],
    todo: []
  },
  {
    id: 3,
    date:   new Date(2015, 10, 9, 13, 0, 0),
    link: 'reports/',
    burndown: 'https://docs.google.com/spreadsheets/d/159aumxY2B08gf0H7M_kqTo2VyRcP8-0WFPE0bxFi3so/pubchart?oid=1331046958&amp;format=interactive',
    functionality: [1,2,3,4],
    tests: [1,2,3,4,5,6,7,8,9,10,
                    11,12,15,16,17,18,19,20,
                    21,22,23,24,25,26,27,28,29,30,
                    31,32,33,34,35,36,37,38,39,40,
                    41],
    todo: [13,14],
    meetings: ['During the last sprint we had a retrospect and a sprint planning meeting.<br>' + 
              'In the retrospect we saw that the last sprint was very intense leading to us being ahead of schedule.<br>' + 
              'In the sprint planning meeting we assigned stories to the different team members.'],
    pointsSys: ['Our points sytem was based on the Fibonacci Sequence. Each developer had assigend points to their own story<br>' +
                'because of our different development skills.']
  },
    {
    id: 4,
    date:   new Date(2015, 10, 16, 23, 59, 12 ),
    link: 'reports/',
    burndown: 'https://docs.google.com/spreadsheets/d/1qjzMJP5uw75XL0eKEKSjk6sxH3afQ7AykKQmh6No_Zg/pubchart?oid=1762713596&format=interactive',
    cumulativeburndown: 'https://docs.google.com/spreadsheets/d/1qjzMJP5uw75XL0eKEKSjk6sxH3afQ7AykKQmh6No_Zg/pubchart?oid=731643772&format=interactive',
    functionality: [1,2,3,4],
    tests: [1,2,3,4,5,6,7,8,9,10,
                    11,12,13,14,15,16,17,18,19,20,
                    21,22,23,24,25,26,27,28,29,30,
                    31,32,33,34,35,36,37,38,39,40,
                    41],
    todo: [13,14],
    meetings: ['During the last sprint we had a retrospect and a sprint planning meeting.<br>' + 
              'We remain ahead of schedule in our sprints. This week was focused on adding Google Analytics capability to analyze the traffic that will be sent to the site.<br>' + 
              'We also added API capablity and the donation link to our page. Our next step for Sprint 5 will be to conduct A/B testing to optimize our donation traffic'],
    pointsSys: ['Our points sytem was based on the Fibonacci Sequence. Each developer had assigend points to their own story<br>' +
                'because of our different development skills.']
  },
      {
    id: 5,
    date:   new Date(2015, 10, 30, 23, 59, 12 ),
    link: 'reports/',
    burndown: 'https://docs.google.com/spreadsheets/d/1qjzMJP5uw75XL0eKEKSjk6sxH3afQ7AykKQmh6No_Zg/pubchart?oid=643140696&format=interactive',
    cumulativeburndown: 'https://docs.google.com/spreadsheets/d/1qjzMJP5uw75XL0eKEKSjk6sxH3afQ7AykKQmh6No_Zg/pubchart?oid=1257034279&format=interactive',
    functionality: [1,2,3,4],
    tests: [1,2,3,4,5,6,7,8,9,10,
                    11,12,13,14,15,16,17,18,19,20,
                    21,22,23,24,25,26,27,28,29,30,
                    31,32,33,34,35,36,37,38,39,40,
                    41],
    todo: [42],
    meetings: ['During the last sprint we had a retrospective and a sprint planning meeting.<br>' + 
              'We remain ahead of schedule in our sprints. This week we reviewed our Google Analytics summary and added A/B testing to optimize our domain traffic.<br>' + 
              'Our next steps for Sprint 6 will be to review the result of the A/B tests and assess which site format drives the most ticket sales. We will also add a link to the home page in the footer. Lastly, we will also be improving our site aesthetics by adding a CSS template to our current html'],
    pointsSys: ['Our points sytem was based on the Fibonacci Sequence. Each developer had assigend points to their own story<br>' +
                'because of our different development skills.']
  },
        {
    id: 6,
    date:   new Date(2015, 11, 7, 23, 59, 12 ),
    link: 'reports/',
    burndown: 'https://docs.google.com/spreadsheets/d/1qjzMJP5uw75XL0eKEKSjk6sxH3afQ7AykKQmh6No_Zg/pubchart?oid=1808718502&format=interactive',
    cumulativeburndown: 'https://docs.google.com/spreadsheets/d/1qjzMJP5uw75XL0eKEKSjk6sxH3afQ7AykKQmh6No_Zg/pubchart?oid=1121113147&format=interactive',
    functionality: [1,2,3,4],
    tests: [1,2,3,4,5,6,7,8,9,10,
                    11,12,13,14,15,16,17,18,19,20,
                    21,22,23,24,25,26,27,28,29,30,
                    31,32,33,34,35,36,37,38,39,40,
                    41],
    todo: [],
    meetings: ['During the last sprint we had a retrospective and a sprint planning meeting.<br>' + 
              'We remain ahead of schedule in our sprints. We ran into an issue where our Google Analytics traffic was not being directed appropriately for our A/B test.<br>' + 
               'We have since corrected the issue and will monitor and analyize the results of our test before we submit our final report'],
    pointsSys: ['Our points sytem was based on the Fibonacci Sequence. Each developer had assigend points to their own story<br>' +
                'because of our different development skills.']
  },
  {
    id: 7,
    date:   new Date(2015, 11, 11, 23, 59, 12 ),
    link: 'https://docs.google.com/document/d/16l8hiq9gmKpGzPOmsHzKnGBahxT_tWXCB6HAM8YaV-0/edit?usp=sharing',
    functionality: [],
    tests: [],
    todo: []
  }  
];

function getById (id) {
  for (var i = allReports.length - 1; i >= 0; i--) {
    if (id === allReports[i].id){
      return allReports[i];
    }
  }
  return null;
}

module.exports = exports = {
  all: allReports,
  getById: getById
};
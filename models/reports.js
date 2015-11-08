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
    todo: []
  },
  {
    id: 2,
    date:   new Date(2015, 10, 2, 13, 0, 0),
    link: 'https://docs.google.com/document/d/1MmybbEWV9suHhjL_ie3x0Xasq0Vfpax-DOwR-RtfBL0/edit?usp=sharing',
    functionality: [],
    todo: []
  },
  {
    id: 3,
    date:   new Date(2015, 10, 9, 13, 0, 0),
    link: 'reports/',
    functionality: [1,2,3,4,5,6,7,8,9,10,
                    11,12,15,16,17,18,19,20,
                    21,22,23,24,25,26,27,28,29,30,
                    31,32,33,34,35,36,37,38,39,40,
                    41],
    todo: [13,14]
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
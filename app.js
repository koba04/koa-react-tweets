'use strict';

var React = require('React'),
    TweetsApp = require('./components/TweetsApp')
;

var initialState = JSON.parse(
  document.getElementById('initial-state').getAttribute('data-json')
);
console.log(initialState);

React.render(
  React.createElement(TweetsApp),
  document.getElementById('react-app')
);

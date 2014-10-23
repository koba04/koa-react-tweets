'use strict';

var React = require('React'),
    TweetsApp = require('./components/TweetsApp')
;

var initialState = JSON.parse(document.getElementById('initial-state').innerHTML);

React.render(
  React.createElement(TweetsApp),
  document.getElementById('react-app')
);

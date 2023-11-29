var React = require('react');
var render = require('react-dom').render;

var Inspector = require('..');
var InteractiveSelection = require('./interactive-selection');

var h = React.createElement;
var data = require('./data.json');


React.render(
    <Inspector data={ data } />,
    document.getElementById('inspector')
);
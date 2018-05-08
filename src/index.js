
const React = require('react');
const ReactDOM = require('react-dom');
const AppRoute = require('./route');

// if you used the cdn common css, u dont need this
// require('~assets/styles/common.css')

ReactDOM.render(
    <AppRoute />,
    document.getElementById('mst-app'),
);



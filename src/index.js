
const React = require('react');
const ReactDOM = require('react-dom');
const AppRoute = require('./router').default;

ReactDOM.render(
    <AppRoute />,
    document.getElementById('mst-app'),
);


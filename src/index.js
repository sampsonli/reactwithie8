import React from 'react';
import ReactDOM from 'react-dom';
import AppRoute from './router';
import './assets/styles/common.css';

ReactDOM.render(
    <AppRoute />,
    document.getElementById('app'),
);
if (module.hot) {
    module.hot.accept();
}

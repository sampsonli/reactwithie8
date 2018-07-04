
import React from 'react';
import { Router, hashHistory } from 'react-router';
import { Provider } from 'react-redux';

const configureStore = require('./store/configureStore');

const store = configureStore(window.__INITIAL_STATE__);
const views = [];
((r) => {
    r.keys().forEach((key) => {
        views.push(r(key));
    });
})(require.context('./containers', true, /\.\/[^\/]+\/index.js$/)); // eslint-disable-line

const routeConfig = {
    path: '/',
    childRoutes: [
        ...views,
    ],
}

// 通过Router配置上hashHistory和route
// 再用reactRedux.provider将Router包含起来
// 注册再reactRedux.provider上的store将和router中的所有component联系起来
export default function () {
    return (<Provider store={store}>
        <Router history={hashHistory} routes={routeConfig} />
    </Provider>);
}


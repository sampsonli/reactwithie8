/**
 *  此文件不需要做任何修改了
 */
import React from 'react';
import { Router, hashHistory} from 'react-router';
import { Provider } from 'react-redux';
import {combineReducers} from 'redux';

const configureStore = require('./store/configureStore');

/**
 * 用于恢复之前状态用的， 此处可以不用干掉， 保留
 */
const store = configureStore(window.__INITIAL_STATE__);

/**
 * 自动注入 reducer
 * @param key
 * @param reducer
 */
export const injectReducer = ({ key, reducer }) => {
    if (!reducer || Object.hasOwnProperty.call(store.asyncReducers, key)) return;
    store.asyncReducers[key] = reducer;
    store.replaceReducer(combineReducers({
        ...store.asyncReducers,
    }));
};

// 自动注入各个子模块
const modules = [];
((r) => {
    r.keys().forEach((key) => {
        const md = r(key);
        md.path = md.path || key.split('/')[2];
        modules.push(md);
    });
})(require.context('./', true, /\.\/modules\/[^\/]+\/route\.js$/)); // eslint-disable-line
require.context('./', true, /^\.\/(common|actions|components).*\.js$/);

const routeConfig = {
    path: '/',
    indexRoute: {
        onEnter(ig, replace) {
            replace('/home');
        },
    },
    childRoutes: modules,
};

// 通过Router配置上hashHistory和route
// 再用reactRedux.provider将Router包含起来
// 注册再reactRedux.provider上的store将和router中的所有component联系起来
export default function () {
    return (<Provider store={store}>
        <Router history={hashHistory} routes={routeConfig} />
    </Provider>);
}


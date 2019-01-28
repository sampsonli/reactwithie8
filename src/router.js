/**
 *  此文件不需要做任何修改了
 */
import React from 'react';
import { Router, hashHistory} from 'react-router';
import { Provider } from 'react-redux';
import store from './store';

// 自动注入各个子模块
const routes = [];
((r) => {
    r.keys().forEach((key) => {
        const md = r(key);
        md.path = md.path || key.split('/')[2];
        routes.push(md);
    });
})(require.context('./', true, /\.\/routes\/[^\/]+\/route\.js$/)); // eslint-disable-line
require.context('./', true, /^\.\/(common|components).*\.js$/);

const routeConfig = {
    path: '/',
    childRoutes: routes,
};
// 通过Router配置上hashHistory和route
// 再用reactRedux.provider将Router包含起来
// 注册再reactRedux.provider上的store将和router中的所有component联系起来
export default function () {
    return (<Provider store={store}>
        <Router history={hashHistory} routes={routeConfig} />
    </Provider>);
}


/**
 *  此文件不需要做任何修改了
 */
import React from 'react';
import { Router, useRouterHistory} from 'react-router';
import {createHashHistory} from 'history';
import { Provider } from 'react-redux';
import store from './store';

const appHistory = useRouterHistory(createHashHistory)({queryKey: false});
// 自动注入各个子模块
const routes = [];
((r) => {
    r.keys().forEach((key) => {
        const md = r(key).default;
        md.path = md.path || key.split('/')[2];
        routes.push(md);
    });
})(require.context('./', true, /\.\/routes\/[^\/]+\/route\.js$/)); // eslint-disable-line
require.context('./', true, /^\.\/(common|components).*\.js$/); // 把common/components 包中的内容打入entry包中

const routeConfig = {
    path: '/',
    childRoutes: routes,
};
// 通过Router配置上hashHistory和route
// 再用reactRedux.provider将Router包含起来
// 注册再reactRedux.provider上的store将和router中的所有component联系起来
export default function () {
    return (<Provider store={store}>
        <Router history={appHistory} routes={routeConfig} />
    </Provider>);
}



import React from 'react';
import { Router, hashHistory, BrowserHistory} from 'react-router';
import { Provider } from 'react-redux';


import TestPage from '~containers/test';
import TestStartPage from '~containers/test/start';
import TestQuestionPage from '~containers/test/question';
import TestHomePage from '~containers/test/home';
import TestErrorPage from '~containers/test/error';

const configureStore = require('./store/configureStore').configureStore;

const store = configureStore(window.__INITIAL_STATE__)
// const store = configureStore(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());




const rootRoute = {
    path: '/',
    // indexRoute: {
    //     // 表示将按需加载的组件
    //     getComponent(nextState, cb) {
    //         //require.ensure，webpack异步加载的典型范式
    //         require.ensure([], (require) => {
    //             cb(null, require('~containers/FirstPage'));
    //         }, 'FirstPage');
    //     } 
    // },
    childRoutes: [
        {
            path: 'test',
            component: TestPage,
            childRoutes: [
                {
                    path: 'home',
                    component: TestHomePage,
                    // getComponent(ns, cb) {
                    //     require.ensure([], (require) => {
                    //         cb(null, require('~containers/Counter'));
                    //     }, 'counter');
                    // },
                },
                {
                    path: 'error',
                    component: TestErrorPage,
                
                },
                {
                    path: 'start',
                    component: TestStartPage,
                   
                },
                {
                    path: 'question',
                    component: TestQuestionPage,
                   
                },

            ]
        },
    
    ],
}

// const AppRoute = nil => 
//     <Provider store={store}>
//         <Router history={hashHistory} routes={rootRoute} />
//     </Provider>

// export default AppRoute;

// 通过Router配置上hashHistory和route
// 再用reactRedux.provider将Router包含起来
// 注册再reactRedux.provider上的store将和router中的所有component联系起来
export default function(){
    return  (<Provider store={store}>
                <Router history={hashHistory} routes={rootRoute} />
            </Provider>)
}


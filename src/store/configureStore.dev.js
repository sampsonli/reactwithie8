// 如果是开发模式，store 采用此配置
import React from 'react'
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';

import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

//创建DevTools组件
const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey='ctrl-h' changePositionKey  ='ctrl-q'>
    <LogMonitor theme='tomorrow' />
  </DockMonitor>
);

// 合并原有中间件
const echancer  = compose(
    applyMiddleware(thunk),
    //启用带有monitors（监视显示）的DevTools
    DevTools.instrument()
  )

const configureStore = (preloadedState) => {
    // store通过redux.createStore(reducer,初始state,middleWare)生成
    const store = createStore(
        rootReducer,
        preloadedState,
        echancer 
    );

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers').default;
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
};

export default {configureStore,DevTools};

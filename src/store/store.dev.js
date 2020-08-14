// 如果是开发模式，models 采用此配置

import {createStore, applyMiddleware, compose} from 'redux';
import createLogger from 'redux-logger';

const store = createStore(
    () => {},
    window.__INITIAL_STATE__,
    compose(
        // applyMiddleware(createLogger()),
    ),
);

export default store;

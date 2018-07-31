// 如果是开发模式，store 采用此配置

import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import initReducers from '../reducers';


const configureStore = (preloadedState) => {
    const store = createStore(
        combineReducers(initReducers),
        preloadedState,
        compose(
            applyMiddleware(thunkMiddleware, createLogger()),
            // applyMiddleware 是redux的原生方法，它将所有中间件组成一个数组，依次执行。
        ),
    );

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers').default;
            store.replaceReducer(nextRootReducer);
        });
    }

    store.asyncReducers = {
        ...initReducers,
    };
    return store;
};

export default configureStore;

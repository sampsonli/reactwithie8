// 如果是开发模式，store 采用此配置

import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import initReducers from '../reducers';

const store = createStore(
    combineReducers(initReducers),
    window.__INITIAL_STATE__,
    compose(
        applyMiddleware(thunkMiddleware, createLogger()),
        // applyMiddleware 是redux的原生方法，它将所有中间件组成一个数组，依次执行。
    ),
);

const asyncReducers = {
    ...initReducers,
};
store.injectReducer = ({ key, reducer }) => {
    if (!reducer || asyncReducers[key]) return;
    asyncReducers[key] = reducer;
    store.replaceReducer(combineReducers({
        ...asyncReducers,
    }));
};

if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
        store.replaceReducer(combineReducers({
            ...asyncReducers,
        }));
    });
}

export default store;

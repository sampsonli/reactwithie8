// 如果是产品（打包）模式，store 采用此配置

import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import initReducers from '../reducers';

const store = createStore(
    combineReducers(initReducers),
    window.__INITIAL_STATE__,
    applyMiddleware(thunkMiddleware),
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
export default store;

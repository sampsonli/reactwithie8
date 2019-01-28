// 如果是产品（打包）模式，store 采用此配置

import {createStore} from 'redux';
import helper from './helper';

const store = createStore(
    () => {},
    window.__INITIAL_STATE__,
);
const asyncReducers = {
};
helper(store, asyncReducers)
export default store;

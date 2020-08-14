// 如果是产品（打包）模式，models 采用此配置

import {createStore} from 'redux';

const store = createStore(
    () => {},
    window.__INITIAL_STATE__,
);
export default store;

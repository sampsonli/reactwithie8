// 如果是产品（打包）模式，store 采用此配置

import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import initReducers from '../reducers';

export default function configureStore(initialState) {
    // const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        combineReducers(initReducers),
        initialState,
        applyMiddleware(thunkMiddleware),
    );
    store.asyncReducers = {
        ...initReducers,
    };
    return store;
}

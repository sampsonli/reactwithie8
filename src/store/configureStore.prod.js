// 如果是产品（打包）模式，store 采用此配置
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';

function configureStore(initialState) {
    // const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunkMiddleware),
    );

    return store;
}
//生产环境不使用devTools
const DevTools=null;
export default {configureStore,DevTools}
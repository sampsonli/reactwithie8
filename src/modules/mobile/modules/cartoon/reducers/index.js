import {combineReducers} from 'redux';
import store from '~/store';

const reducers = {};
((r) => {
    r.keys().forEach((key) => {
        if (!~key.indexOf('index.js')) {
            reducers[key.split('/')[1].split('.')[0]] = r(key);
        }
    });
})(require.context('./', true, /\.js$/));
if (Object.keys(reducers).length > 0) {
    store.injectReducer({key: 'mobile/cartoon', reducer: combineReducers(reducers)});
}

import {combineReducers} from 'redux';

const cache = {};
((r) => {
    r.keys().forEach((key) => {
        if (!~key.indexOf('index.js')) {
            cache[key.split('/')[1].split('.')[0]] = r(key);
        }
    });
})(require.context('./', true, /\.js$/));
export default Object.keys(cache).length > 0 ? combineReducers(cache) : null;


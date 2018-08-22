import {injectReducer} from '~/route';

const mid = module.id;
// --///////////////////////下面的内容固定\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
const modules = [];
((r) => {
    r.keys().forEach((key) => {
        const md = r(key);
        md.path = md.path || key.split('/')[2];
        modules.push(md);
    });
})(require.context('./', true, /\.\/modules\/[^\/]+\/route.js$/)); // eslint-disable-line
// --\\\\\\\\\\\\\\\\\\\\\\\上面面的内容固定///////////////////////////////

const getMobile = (nextState, callback) => {
    require.ensure([], require => {
        const reducers = require('./reducers');
        injectReducer({key: mid, reducer: reducers});
        callback(null, require('./'));
    }, 'mobile');
};


export default {
    // 给当前模块生成唯一的id
    mid: module.id,
    getComponent: getMobile,
    childRoutes: [
        ...modules,
    ],
};

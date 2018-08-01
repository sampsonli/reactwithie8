// --///////////////////////下面的内容固定\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
const modules = [];
((r) => {
    r.keys().forEach((key) => {
        const md = r(key);
        md.path = md.path || key.split('/')[1];
        modules.push(md);
    });
})(require.context('./modules', true, /\.\/[^\/]+\/route.js$/)); // eslint-disable-line
// --\\\\\\\\\\\\\\\\\\\\\\\上面面的内容固定///////////////////////////////

const getHome = (nextState, callback) => {
    require.ensure([], require => {
        callback(null, require('./'));
    }, 'home');
};


export default {
    // 给当前模块生成唯一的id
    mid: Math.floor(Math.random() * 100000000000),
    getComponent: getHome,
    childRoutes: [
        ...modules,
    ],
};

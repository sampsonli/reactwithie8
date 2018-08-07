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

const getEstation = (nextState, callback) => {
    require.ensure([], require => {
        callback(null, require('./'));
    }, 'estation');
};

const getBbx = (nextState, callback) => {
    require.ensure([], require => {
        callback(null, require('./views/bbx'));
    }, 'home/bbx');
};

export default {
    // 给当前模块生成唯一的id
    mid: module.id,
    getComponent: getEstation,
    indexRoute: {
        onEnter({location}, replace) {
            replace(`${location.pathname}/bbx`);
        },
    },
    childRoutes: [
        {
            path: 'bbx',
            getComponent: getBbx,
        },
        ...modules,
    ],
};

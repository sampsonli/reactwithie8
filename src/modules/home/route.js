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


// 异步加载view   begin
const getHome = (nextState, callback) => {
    require.ensure([], require => {
        callback(null, require('./'));
    }, 'home');
};

// 异步加载view   end

export default {
    mid: module.id, // ///////是给当前模块生成唯一的id，主要是给reducer用的 不需要做任何改动
    getComponent: getHome,
    indexRoute: {
        onEnter({location}, replace) {
            replace(`${location.pathname}/estation`);
        },
    },

    childRoutes: [
        ...modules,
    ],
};

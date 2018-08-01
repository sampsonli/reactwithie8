const modules = [];
((r) => {
    r.keys().forEach((key) => {
        const md = r(key);
        md.path = md.path || key.split('/')[1];
        modules.push(md);
    });
})(require.context('./modules', true, /\.\/[^\/]+\/route.js$/)); // eslint-disable-line

const getEstation = (nextState, callback) => {
    require.ensure([], require => {
        callback(null, require('./'));
    }, 'estation');
};

export default {
    path: 'estation',
    getComponent: getEstation,
    childRoutes: [
        ...modules,
    ],
};

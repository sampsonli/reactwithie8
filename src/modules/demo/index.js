const getMain = (nextState, callback) => {
    require.ensure([], require => {
        callback(null, require('./main'));
    }, 'demo/main');
};
export default {
    path: 'demo',
    getComponent: getMain,
};

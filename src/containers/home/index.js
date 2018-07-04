export default {
    path: 'home',
    getComponent(nextState, callback) {
        require.ensure([], require => {
            callback(null, require('./home'));
        }, 'home');
    },
};

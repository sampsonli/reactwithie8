
const getHome = (nextState, callback) => {
    require.ensure([], require => {
        callback(null, require('./'));
    }, 'home');
};

export default {
    path: 'home',
    getComponent: getHome,
    childRoutes: [
        {
        },

    ],
};

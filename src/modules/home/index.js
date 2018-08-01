
const getHome = (nextState, callback) => {
    require.ensure([], require => {
        callback(null, require('./main'));
    }, 'home/home');
};

export default {
    path: 'home',
    getComponent: getHome,
    childRoutes: [
        {
        },

    ],
};

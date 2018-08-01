const getMain = (nextState, callback) => {
    require.ensure([], require => {
        callback(null, require('./'));
    }, 'demo');
};


export default {
    path: 'demo',
    getComponent: getMain,
    childRoutes: [
        {
        },

    ],
};

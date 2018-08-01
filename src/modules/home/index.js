const path = 'home';


const getHome = (nextState, callback) => {
    require.ensure([], require => {
        callback(null, require('./main'));
    }, `${path}/home`);
};

export default {
    path,
    getComponent: getHome,
    childRoutes: [
        {
        },

    ],
};

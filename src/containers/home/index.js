const getHome = (nextState, callback) => {
    require.ensure([], require => {
        callback(null, require('./home'));
    }, 'home');
};
const getJyez = (nextState, callback) => {
    require.ensure([], require => {
        callback(null, require('./jyez'));
    }, 'jyez');
};

const getBbx = (nextState, callback) => {
    require.ensure([], require => {
        callback(null, require('./jyez/bbx'));
    }, 'bbx');
};

export default {
    path: 'home',
    getComponent: getHome,
    childRoutes: [
        {
            path: 'jyez',
            getComponent: getJyez,
            childRoutes: [
                {
                    path: 'bbx',
                    getComponent: getBbx,
                },
            ],
        },

    ],
};

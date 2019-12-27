import load from '~/common/load';

// const Demo = load(() => import('./'));
const Home = load(() => import(/* webpackChunkName: demo_home */'./views/home'));

export default {
    // component: Demo,
    childRoutes: [
        {
            path: 'home',
            component: Home,
        },
    ],
};

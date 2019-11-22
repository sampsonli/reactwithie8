import load from '~/common/load';

const Demo = load(() => import('./'));
const Home = load(() => import('./views/home'));
const Test = load(() => import('./views/test'));

export default {
    component: Demo,
    childRoutes: [
        {
            path: 'home',
            component: Home,
        },
        {
            path: 'test',
            component: Test,
        },
    ],
};

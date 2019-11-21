import lazy from '~/components/lazy';

const Demo = lazy(() => import('./'));
const Home = lazy(() => import('./views/home'));
const Test = lazy(() => import('./views/test'));

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

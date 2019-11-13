import lazy from '~/components/lazy';

const Demo = lazy(() => import('./'));
const Home = lazy(() => import('./views/home'));

export default {
    component: Demo,
    childRoutes: [
        {
            path: 'home',
            component: Home,
        },
    ],
};

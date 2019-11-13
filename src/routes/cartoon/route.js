import lazy from '~/components/lazy';

const Cartoon = lazy(() => import('./'));
const List = lazy(() => import('./views/list'));

export default {
    component: Cartoon,
    childRoutes: [
        {
            path: 'list',
            component: List,
        },
    ],
};

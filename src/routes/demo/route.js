import load from '~/common/load';
import Home from './views/home';

// const Home = load(() => import(/* webpackChunkName: demo1_home */'./views/home'));


export default {
    childRoutes: [
        {
            path: 'home',
            component: Home,
        },
    ],
};

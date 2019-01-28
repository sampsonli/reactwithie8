import asyncComponent from '~/components/asyncComponent';
// --///////////////////////下面的内容固定\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
const routes = [];
((r) => {
    r.keys().forEach((key) => {
        const md = r(key);
        md.path = md.path || key.split('/')[2];
        routes.push(md);
    });
})(require.context('./', true, /\.\/routes\/[^\/]+\/route.js$/)); // eslint-disable-line
// --\\\\\\\\\\\\\\\\\\\\\\\上面面的内容固定///////////////////////////////

const Home = asyncComponent(() => import('./'));

export default {
    component: Home,
    indexRoute: {
        onEnter({location}, replace) {
            replace(`${location.pathname}/estation`);
        },
    },

    childRoutes: [
        ...routes,
    ],
};

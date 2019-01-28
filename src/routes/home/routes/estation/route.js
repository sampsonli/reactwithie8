import asyncComponent from '~/components/asyncComponent';
// --///////////////////////下面的内容固定\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
const modules = [];
((r) => {
    r.keys().forEach((key) => {
        const md = r(key);
        md.path = md.path || key.split('/')[2];
        modules.push(md);
    });
})(require.context('./', true, /\.\/modules\/[^\/]+\/route.js$/)); // eslint-disable-line
// --\\\\\\\\\\\\\\\\\\\\\\\上面面的内容固定///////////////////////////////

const Estation = asyncComponent(() => import('./'));
const Bbx = asyncComponent(() => import('./views/bbx'));

export default {
    component: Estation,
    indexRoute: {
        onEnter({location}, replace) {
            replace(`${location.pathname}/bbx`);
        },
    },
    childRoutes: [
        {
            path: 'bbx',
            component: Bbx,
        },
        ...modules,
    ],
};


import asyncComponent from '~/components/asyncComponent';

const mid = module.id;
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

const Cartoon = asyncComponent(() => import('./'))
const List = asyncComponent(() => import('./views/list'))

export default {
    mid,
    component: Cartoon,
    childRoutes: [
        {
            path: 'list',
            component: List,
        },
        ...modules,
    ],
};

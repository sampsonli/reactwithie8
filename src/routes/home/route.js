import asyncComponent from '~/components/asyncComponent';
// --///////////////////////下面的内容固定\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
const modules = [];
((r) => {
    r.keys().forEach((key) => {
        const md = r(key);
        md.path = md.path || key.split('/')[2];
        modules.push(md);
    });
})(require.context('./', true, /\.\/routes\/[^\/]+\/route.js$/)); // eslint-disable-line
// --\\\\\\\\\\\\\\\\\\\\\\\上面面的内容固定///////////////////////////////

const Home = asyncComponent(() => import('./'));

export default {
    mid: module.id, // ///////是给当前模块生成唯一的id，主要是给reducer用的 不需要做任何改动
    component: Home,
    indexRoute: {
        onEnter({location}, replace) {
            replace(`${location.pathname}/estation`);
        },
    },

    childRoutes: [
        ...modules,
    ],
};

import store from '~/store';

const model = {
    ns: 'cartoon',
    state: {
        rgb: '2234bb'
    },
    mutations: {
        changeColor(state, payload) {
            state.rgb = payload;
        },
    },
    actions: {
        getUserInfo({commit}, payload) {

            commit('changeColor', Math.floor(Math.random()*1000) + '');
        },
    },
};
export const {ns} = model;
export default store.connect(model);

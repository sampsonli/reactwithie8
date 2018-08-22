import {GETINFO} from '../actions/types';

const initState = {
    rgb: '2234bb'
}
const mutations = {
    [GETINFO](state, payload) {
        state.rgb = payload
    }
}
export default (state = initState, action) => {
    if (Object.hasOwnProperty.call(mutations, action.type)) {
        const newState = {...state};
        return mutations[action.type](newState, action.payload) || newState
    }
    return state;
}

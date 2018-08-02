import {GETINFO} from '../actions/types';
const initState = {
    rgb: '2234bb'
}
const mutiations = {
    [GETINFO](state, payload) {
        state.rgb = payload
    }
}
export default (state = initState, action) => {
    if(Object.hasOwnProperty.call(mutiations, action.type)) {
        const newState = {...state};
        return mutiations[action.type](newState, action.payload) || newState
    }
    return state;
}
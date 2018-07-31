import {
    EVT_GETINFO,
} from '../actions/actionsTypes';

const initState = {
    info: null,
}

export default function evt(state = initState, action) {
    switch (action.type) {
        case EVT_GETINFO: {
            const result = {...state};
            result.info = action.payload;
            return result;
        }
        default:
            return state;
    }

}

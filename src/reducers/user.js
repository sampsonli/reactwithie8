import {
    DEMO
} from '../actions/types';

const initState = {
    info: null,
}

export default function evt(state = initState, action) {
    switch (action.type) {
        case DEMO: {
            const result = {...state};
            result.info = action.payload;
            return result;
        }
        default:
            return state;
    }

}

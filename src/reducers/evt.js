
import { EVT_SET_GETQUESTION_LIST, EVT_GETINFO } from '~actions/actionsTypes';
const initState = {
    info: null,
    qlist: null,
}
export default function evt(state = initState, action) {
    switch (action.type) {
        case EVT_GETINFO: {
            const result = { ...state };
            result.info = action.payload;
            return result;
        }
        case EVT_SET_GETQUESTION_LIST: {
            const result = { ...state };
            result.qlist = action.payload;
            return result;
        }

        default:
            return state;
    }
}

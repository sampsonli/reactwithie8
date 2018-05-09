
import { EVT_SET_GETQUESTION_LIST } from '~actions/actionsTypes';
const initState = {
    qlist: null
}
export default function evt(state = initState, action) {
    switch (action.type) {
        case EVT_SET_GETQUESTION_LIST: {
            let newState = { ...state }
            newState.qlist = action.payload
            return newState;
        }
        default:
            return state;
    }
}

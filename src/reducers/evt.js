import {
    EVT_GETINFO,
    EVT_SET_GETQUESTION_LIST,
    EVT_SET_SUBMIT_RESULT,
    EVT_SET_SUBMIT_INFO_RESULT,
} from '../actions/actionsTypes';
const initState = {
    info: null,
    qlist: null,
    record: null,
    basInfResu: null,
    qsparams: null,
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

        case EVT_SET_SUBMIT_RESULT: {
            const result = { ...state };
            result.record = action.payload;
            return result;
        }
        case EVT_SET_SUBMIT_INFO_RESULT: {
            const result = { ...state };
            result.basInfResu = action.payload;
            return result;
        }
        case 'EVT_SET_SEARCH_PARAMS': {
            const result = { ...state };
            result.qsparams = action.payload;
            return result;
        }

        default:
            return state;
    }

}

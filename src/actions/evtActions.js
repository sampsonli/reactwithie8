
import ajax from '../common/ajax';
import {EVT_SET_GETQUESTION_LIST} from './actionsTypes';


export const getQuestionList = () => async (dispatch) => {
    const res = await ajax.get('/eval/get/questionlist/id?evalId=1');
    if(res.code === '200') {
        dispatch({type: EVT_SET_GETQUESTION_LIST, payload: res.data});
    } else {
        const e = new Error(e.msg);
        e.code = resp.code;
        throw e;
    }
    
    return res;
}
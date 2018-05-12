
import ajax from '../common/ajax';
import {EVT_SET_GETQUESTION_LIST, EVT_GETINFO} from './actionsTypes';



/**
 * 用户出题并给出基准答案
 */
export const getBaseInfo = (args) => async (dispatch) => {
    
    const resp = await ajax.get('/eval/get/basicinfo/id?evalId=1', args);
    if(resp.code === '200') {
        dispatch({type: EVT_GETINFO, payload: resp.data});
        return resp.data;
    } else {
        const err =  new Error(resp.msg);
        err.code = resp.code;
        throw err;
    }
    return resp;
};


export const getQuestionList = () => async (dispatch) => {
    const res = await ajax.get('/eval/get/questionlist/id?evalId=1');
    if(res.code === '200') {
        dispatch({type: EVT_SET_GETQUESTION_LIST, payload: res.data});
        return res.data;
    } else {
        const e = new Error(e.msg);
        e.code = resp.code;
        throw e;
    }

}


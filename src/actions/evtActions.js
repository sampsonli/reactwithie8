import axios from 'axios';
import {
    EVT_GETINFO,
    EVT_SET_GETQUESTION_LIST,
    EVT_SET_SUBMIT_RESULT,
    EVT_SET_SUBMIT_INFO_RESULT,
    EVT_GET_META_INFO,
} from './actionsTypes';

import ajax from '../common/ajax';
import { loginbaseurl } from '../common/config';

function jumpLogin() {
    location.href = loginbaseurl + '&fromurl=' + encodeURIComponent(location.href);
}


/**
 * @deprecated 这个方法用不上了
 * @param {*} param0 
 */
export const createOrderNo = ({ evalId = 1, userId, clientId = 1, taskId = 1, sourcePlatform = 2, realName = '', encodeStr = '' }) => async (dispatch) => {

    const resp = await ajax.post(`/eval/create/orderno`, { evalId, userId: userId, clientId, taskId, sourcePlatform, realName, encodeStr });
    if (resp.code === '200') {
        return resp.data;
    } else {
        if (resp.code === '2001106') {
            jumpLogin();
        }
        const err = new Error(resp.msg);
        err.code = resp.code;
        throw err;
    }
};



/**
 * 获取基本信息
 */
export const getMetaInfo = (orderNo) => async (dispatch) => {

    const resp = await ajax.get(`/eval/get/evaluation/orderno?orderNo=${orderNo}`);
    if (resp.code === '200') {
        dispatch({ type: EVT_GET_META_INFO, payload: resp.data });
        return resp.data;
    } else {
        if (resp.code === '2001106') {
            jumpLogin();
        }
        const err = new Error(resp.msg);
        err.code = resp.code;
        throw err;
    }
};

/**
 * 用户出题并给出基准答案
 */
export const getBaseInfo = (orderNo) => async (dispatch) => {

    const resp = await ajax.get(`/eval/get/user/basicinfo?orderNo=${orderNo}`);
    if (resp.code === '200') {
        dispatch({ type: EVT_GETINFO, payload: resp.data });
        return resp.data;
    } else {
        if (resp.code === '2001106') {
            jumpLogin();
        }
        const err = new Error(resp.msg);
        err.code = resp.code;
        throw err;
    }
};


/**
 * 用户出题并给出基准答案
 */
export const getQuestionList = ({ orderNo }) => async (dispatch) => {

    const resp = await ajax.get(`/eval/get/user/questionlist?orderNo=${orderNo}`);
    if (resp.code === '200') {
        dispatch({ type: EVT_SET_GETQUESTION_LIST, payload: resp.data });
        return resp.data;
    } else {
        if (resp.code === '2001106') {
            jumpLogin();
        }
        const err = new Error(resp.msg);
        err.code = resp.code;
        throw err;
    }
};
/**
 * 提交用户答题
 * @param {答题记录} answerList 
 */
export const submitRecord = ({ answerList, orderNo, answerTime }) => async (dispatch) => {
    const resp = await ajax.post('/eval/post/user/record', { answerList, orderNo, answerTime });
    if (resp.code === '200') {
        dispatch({ type: EVT_SET_SUBMIT_RESULT, payload: resp.data });
        return resp.data;
    } else {
        if (resp.code === '2001106') {
            jumpLogin();
        }
        const err = new Error(resp.msg);
        err.code = resp.code;
        throw err;
    }
}


/**
 * 提交用户基本信息
 * @param {答题记录} settings 
 */
export const submitInfo = ({ settings, orderNo }) => async (dispatch) => {
    const resp = await ajax.post('/eval/post/user/basicinfo', { settings, orderNo });
    if (resp.code === '200') {
        dispatch({ type: EVT_SET_SUBMIT_INFO_RESULT, payload: resp.data });
        return resp.data;
    } else {
        if (resp.code === '2001106') {
            jumpLogin();
        }
        const err = new Error(resp.msg);
        err.code = resp.code;
        throw err;
    }
}



export const getPersonalReport = ({orderNo, clientId = 1, enCodeStr = ''}) => async () => {
    const resp = await ajax.get(`/eval/get/user/reporturl?orderNo=${orderNo}&clientId=${clientId}&enCodeStr=${enCodeStr}`);
    if (resp.code === '200') {
        return resp.data;
    } else {
        if (resp.code === '2001106') {
            jumpLogin();
        }
        const err = new Error(resp.msg);
        err.code = resp.code;
        throw err;
    }
}

export const getGroupReport = ({decodeStr,clientId, type}) => async () => {
    const resp = await ajax.get(`/eval/get/group/report?clientId=${clientId}&type=${type}&decodeStr=${decodeStr}`);
    if (resp.code === '200') {
        return resp.data;
    } else {
        if (resp.code === '2001106') {
            jumpLogin();
        }
        const err = new Error(resp.msg);
        err.code = resp.code;
        throw err;
    }
}
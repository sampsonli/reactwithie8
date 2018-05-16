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
 * 获取基本信息
 */
export const getMetaInfo = (evtid) => async (dispatch) => {

    const resp = await ajax.get(`/evaluation/get/evaluation/id?id=${evtid}`);
    if (resp.code === '200') {
        // resp.data.basicContent = JSON.parse(resp.data.basicContent);
        dispatch({ type: EVT_GET_META_INFO, payload: resp.data });
        return resp.data;
    } else if (resp.code === '2001106') {
        jumpLogin();
    } else {
        const err = new Error(resp.msg);
        err.code = resp.code;
        throw err;
    }
    return resp;
};

/**
 * 用户出题并给出基准答案
 */
export const getBaseInfo = (evtid) => async (dispatch) => {

    const resp = await ajax.get(`/eval/get/basicinfo?evalId=${evtid}`);
    if (resp.code === '200') {
        dispatch({ type: EVT_GETINFO, payload: resp.data });
        return resp.data;
    } else if (resp.code === '2001106') {
        jumpLogin();

    } else {
        const err = new Error(resp.msg);
        err.code = resp.code;
        throw err;
    }
    return resp;
};


/**
 * 用户出题并给出基准答案
 */
export const getQuestionList = ({evalId}) => async (dispatch) => {

    const resp = await ajax.get(`/eval/get/questionlist/id?evalId=${evalId}`);
    if (resp.code === '200') {
        dispatch({ type: EVT_SET_GETQUESTION_LIST, payload: resp.data });
        return resp.data;
    } else if (resp.code === '2001106') {
        jumpLogin();


    } else {
        const err = new Error(resp.msg);
        err.code = resp.code;
        throw err;
    }
};

/**
 * 提交用户答题
 * @param {答题记录} answerList 
 */
export const submitRecord = ({ answerList, evalId }) => async (dispatch) => {
    const resp = await ajax.post('/eval/post/user/record', { answerList, evalId });
    if (resp.code === '200') {
        dispatch({ type: EVT_SET_SUBMIT_RESULT, payload: resp.data });
        return resp.data;
    } else if (resp.code === '2001106') {
        jumpLogin();


    } else {
        const err = new Error(resp.msg);
        err.code = resp.code;
        throw err;
    }
}

/**
 * 提交用户基本信息
 * @param {答题记录} settings 
 */
export const submitInfo = ({ settings, evalId }) => async (dispatch) => {
    const resp = await ajax.post('/eval/post/user/basicinfo', { settings, evalId });
    if (resp.code === '200') {
        dispatch({ type: EVT_SET_SUBMIT_INFO_RESULT, payload: resp.data });
        return resp.data;
    } else if (resp.code === '2001106') {
        jumpLogin();

    } else {
        const err = new Error(resp.msg);
        err.code = resp.code;
        throw err;
    }
}
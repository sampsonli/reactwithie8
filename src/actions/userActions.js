import {
    DEMO
} from './types';

import ajax from '../common/ajax';
import { loginbaseurl } from '../common/config';




/**
 * 获取基本信息
 */
export const getMetaInfo = (orderNo) => async (dispatch) => {

    const resp = await ajax.get(`/eval/get/evaluation/orderno?orderNo=${orderNo}`);
    if (resp.code === '200') {
        dispatch({ type: DEMO, payload: resp.data });
        return resp.data;
    } else {
        if (resp.code === '2001106') {

        }
        const err = new Error(resp.msg);
        err.code = resp.code;
        throw err;
    }
};

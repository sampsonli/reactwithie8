import axios from 'axios';
import {
    INCREMENT_COUNTER,
    DECREMENT_COUNTER,
    INCREMENT_ASYNC,
} from './actionsTypes';


export default {
    async increment(){
        return async (dispatch) => {
            const res = await axios.get('http://ews.500.com/score/zq/baseinfo?fid=711484')
            dispatch({type: INCREMENT_COUNTER, data: res});
        }
    },
    decrement(){
        return {type: DECREMENT_COUNTER};
    },
    onIncrementAsync(){
        return {type: INCREMENT_ASYNC};
    },
    onOff(){
        return {type:'OFF'};
    },
    onToggle(){
        return {type:'TOGGLE'};
    },
    async onToggle4(dispatch){
        const res = await axios.get('http://ews.500.com/score/zq/baseinfo?fid=711484')
        dispatch({type: 'TOGGLE', payload: res});
    },
}

import axios from 'axios';

export default {
    async onToggle4(dispatch){
        const res = await axios.get('http://ews.500.com/score/zq/baseinfo?fid=711484')
        dispatch({type: 'TOGGLE', payload: res});
    },
}


import ajax from '../common/ajax';


export const onToggle4 = () => async (dispatch) => {
    const res = await ajax.get('http://ews.500.com/score/zq/baseinfo?fid=711484')
    // dispatch({type: 'TOGGLE', payload: res});
    console.log(res)
}
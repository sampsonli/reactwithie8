import {combineReducers} from 'redux';
import counter from './counter';
import toggle from './toggle';

const rootReducer = combineReducers({
    counter,
    toggle
});
// state.couter => reducer(state.counter)
// state.toggle => reducer(state.toggle)
export default rootReducer;

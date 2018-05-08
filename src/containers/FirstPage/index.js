
import React from 'react';
import {Link} from 'react-router'
import style from './style.scss';
import axios from 'axios';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import  actionCreator from '~actions/actionCreator';

let exampleTxt=`const rootRoute = {
    path: '/',
    indexRoute: {
            getComponent(ns, cb) {
                require.ensure([], (require) => {
                    cb(null, require('~containers/list'));
                }, 'list');
            },
            childRoutes: [
                {
                    path: 'list/:name',
                    getComponent(ns, cb) {...},
                }
            ]
        } 
    },
}`;

class FirstPage extends React.Component {
    constructor(props){
        super(props);
    }
    
    render() {
        console.log('this.context',this.context);

        return (
            <div className={style.hello}>
                <h3>First Page</h3>
                <p>
                    this is the first page.<br/>
                    if u dont need this, just wanna show admin nav & menus,<br/>
                    u can change the router like this:
                </p>
                    <pre>
                        {exampleTxt}
                    </pre>
                <p onClick={this.props.onToggleClick} style={{pointer:'cursor'}}>click and await toggle the status: {this.props.status}</p>
                <Link to="/live/list/all">Admin Index</Link>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    status: state.toggle,
});


//bindActionCreators is just a potting for dispatch single action
const mapDispatchToProps =  dispatch => ({
    onToggleClick2: (SyntheticEve) =>{
        // u can see: i can do sth else here
        console.log('onToggleClick',SyntheticEve)
        dispatch({
            type: 'TOGGLE',
            // filter: ownProps.filter
          })
    },
    // it's pure, only can dispath action
    onToggleClick3: bindActionCreators(actionCreator.onToggle, dispatch),
    // it's async
    async onToggleClick(){
        const res = await axios.get('http://ews.500.com/score/zq/baseinfo?fid=711484')
        dispatch({type: 'TOGGLE', payload: res});
    },
    // if u wanna make the mapDispatch be prue, can do this
    onToggleClick4: bindActionCreators(actionCreator.onToggle4, dispatch),
    // the onToggle4 like this
    // async onToggle4(dispatch){
    //     const res = await axios.get('http://ews.500.com/score/zq/baseinfo?fid=711484')
    //     dispatch({type: 'TOGGLE', payload: res});
    // },
    //(u can instead of  return this):
    // onToggle4(){
    //     return async dispatch => {
    //         const res = await axios.get('http://ews.500.com/score/zq/baseinfo?fid=711484')
    //         dispatch({type: 'TOGGLE', payload: res});
    //     }
    // },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(FirstPage);
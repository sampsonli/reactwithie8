import React, { Component } from 'react';
import Timer from '~components/Timer';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import actionCreator from '~actions/actionCreator';

class Counter extends Component {
    render() {
        const props = this.props;
        // const { store } = this.context;
        // debugger;
        return (
            <div className="box">
                <Timer {...props} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    value: state.counter,
});

const mapDispatchToProps = dispatch => ({
    onToggleClick: (dispatch,ownProps) => dispatch({
        type: 'TOGGLE',
        // filter: ownProps.filter
      }),
    onIncreaseClick: bindActionCreators(actionCreator.increment, dispatch),
    // increment(){
    //     return async (dispatch) => {
    //         const res = await axios.get('http://ews.500.com/score/zq/baseinfo?fid=711484')
    //         dispatch({type: INCREMENT_COUNTER, data: res});
    //     }
    // },
});

Counter.contextTypes = {
    store: React.PropTypes.object,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Counter);

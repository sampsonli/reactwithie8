import React from 'react';
import Timer from '~components/Timer';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreator from '~actions/actionCreator';
const DevTools = require('../../store/configureStore').DevTools;

class LiveCt extends React.Component {
    constructor(args) {
        super(args)
    }
    render() {
        const props = this.props;
        // const { store } = this.context;
        // debugger;
        // DevTools作为一个交互显示组件嵌入即可
        return (
            <div className="box">
                {DevTools && <DevTools/> }
                {this.props.params.name}--
            </div>
        );
    }
}

const mapStateToProps = state => ({
    value: state.counter,
});

const mapDispatchToProps = dispatch => ({
    onIncreaseClick: bindActionCreators(actionCreator.increment, dispatch),
});

LiveCt.contextTypes = {
    store: React.PropTypes.object,
};

// 这里返回的是用mapStateToProps和mapDispatchToProps和redux进行了connect的组件
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(LiveCt);

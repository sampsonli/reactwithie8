import {connect} from 'react-redux';
import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';

@connect(state => ({}), dispatch => bindActionCreators({}, dispatch))
export default class Home extends Component {
    static props = {
        children: PropTypes.any,
    }

    render() {
        return <div>hello122222222222222</div>;
    }
}

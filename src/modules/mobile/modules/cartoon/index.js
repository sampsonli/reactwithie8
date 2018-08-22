import {connect} from 'react-redux';
import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import css from './style/index.css';

import {mid} from './route';

import {GETINFO} from './actions/types';

@connect(state => ({ewt: state[mid].ewt}), dispatch => bindActionCreators({dispatch}, dispatch))
export default class Main extends Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        ewt: PropTypes.objectOf(PropTypes.any).isRequired,
    }
    handClick = () => {
        this.props.dispatch({type: GETINFO, payload: Math.floor(Math.random() * 1000000)});
    }
    render() {
        return (<div className={css.main}>
            <div className={css.header} onClick={this.handClick}>点击改变内容222</div>
            <div className={css.content} style={{background: `#${this.props.ewt.rgb}`}}>{this.props.ewt.rgb}</div>

        </div>);
    }
}

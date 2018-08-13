import {connect} from 'react-redux';
import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {injectReducer} from '~/route';
import css from './style/index.css';

// //////////////////下面是每个模块入口必须配置的内容，注入reducer的逻辑， 不需要做任何改动\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
import reducers from './reducers/index';
import {mid} from './route';
injectReducer({key: mid, reducer: reducers});
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\上面是每个模块入口必须配置的内容， 不需要做任何改动///////////////////////////

import {GETINFO}  from './actions/types'


@connect(state => ({ewt: state[mid].ewt}), dispatch => bindActionCreators({dispatch}, dispatch))
export default class Main extends Component {
    handClick = () => {
        this.props.dispatch({type: GETINFO, payload:  Math.floor(Math.random()*1000000)})
    }
    render() {
        return (<div className={css.main}>
            <div className={css.header} onClick={this.handClick}>点击改变内容</div>
            <div className={css.content} style={{background: `#${this.props.ewt.rgb}`}}>{this.props.ewt.rgb}</div>

        </div>);
    }
}

import {connect} from 'react-redux';
import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {injectReducer} from '~/route';
import css from './style/index.css';
import reducers from './reducers';
import {mid} from './route';

// 自动注入当前模块的 reducer
injectReducer({key: mid, reducer: reducers});


@connect(state => ({home: state[mid]}), dispatch => bindActionCreators({}, dispatch))
export default class Main extends Component {

    render() {
        return (<div className={css.main}>
            <div className={css.header}></div>
            <div className={css.content}>移动端页面</div>

        </div>);
    }
}

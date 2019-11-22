import {connect} from 'react-redux';
import React, {Component} from 'react';
import css from './style.less';
import store from '../../store';
import Radar from "./Radar";


class Home extends Component {
    componentDidMount() {
        store.getInitData();
    }

    render() {
        return (
            <div className={css.container}>
                <div className={css.header}>
                    <div className={css['h-ct']} onClick={() => store.getNumber()}>
                        <span className={css['h-title']}>first演示deliverer</span>
                    </div>
                </div>
                <div className={css.content}>
                    {/*<div className={css.init}>{store.initData}</div>*/}
                    {/*<div className={css.button} onClick={store.getNumber}>调用getNumber方法</div>*/}
                    <div className={css.number}>当前number值： <i>{store.number || '加载中...'}</i></div>
                    <Radar/>
                </div>


            </div>
        );
    }
}
export default connect(state => ({state: state[store.ns]}))(Home);
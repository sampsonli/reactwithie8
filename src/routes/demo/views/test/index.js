import {connect} from 'react-redux';
import React, {Component} from 'react';
import css from './style.less';
import model from '../../models';


class Test extends Component {
    componentDidMount() {
        model.getInitData();
    }

    render() {
        return (
            <div className={css.container}>
                <div className={css.header}>
                    <div className={css['h-ct']} onClick={() => model.getNumber()}>
                        <span className={css['h-title']}>test演示deliverer</span>
                    </div>
                </div>
                <div className={css.content}>
                    <div className={css.init}>{model.initData}</div>
                    <div className={css.button} onClick={model.getNumber}>调用getNumber方法</div>
                    <div className={css.number}>当前number值： <i>{model.number || '加载中...'}</i></div>
                </div>

            </div>
        );
    }
}
export default connect(state => ({state: state[model.ns]}))(Test);

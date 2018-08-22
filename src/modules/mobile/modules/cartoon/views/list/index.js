import {connect} from 'react-redux';

import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import classNames from 'classnames';
import css from './style.less';
import {mid} from '../../route';

@connect(state => ({rgb: state[mid].ewt.rgb}), dispatch => bindActionCreators({}, dispatch))
export default class List extends Component {
    static propTypes = {
        rgb: PropTypes.string.isRequired,
    }
    render() {
        return (
            <div className={classNames('l-full l-flex-column', css.container)}>
                <div className={css["header"]}>
                    <div className={css["h-ct"]}>
                        <i className={css["h-back"]}></i>
                        <span className={css["h-title"]}>漫话历史-{this.props.rgb}</span>
                    </div>
                </div>
                <div className="l-flex-1 l-relative">
                    <div className={css["time-line"]}></div>
                    <div className="l-full l-scroll-y">
                        <ul>
                            <li className={classNames(css["item"], css['period'])}>
                                <div><i className={css["logo_01"]}></i><span className={css["l-title"]}>春秋战国</span><span
                                    className={css["s-title"]}>公元前770年—公元前221年</span>
                                </div>
                            </li>
                            <li className={classNames(css["item"], css['art'])}>
                                <div className="l-flex-row"><i className={css["logo_02"]}></i><img className={css["logo"]}
                                                                                            src={require("../../assets/logo.png")}/>
                                    <div className={classNames('l-flex-1 l-relative', css['art-info'])}>
                                        <div className="l-full">
                                            <div className={css["art-m"]}>
                                                这是一段文字， 测试用的的考虑过克拉克邓肯如果盛开的玫瑰
                                            </div>
                                            <div className={css["art-s"]}>一句话简介一句话简介一句话简介</div>
                                            <div className={css["art-i"]}>111739</div>
                                        </div>


                                    </div>
                                </div>
                            </li>

                        </ul>
                    </div>
                </div>

            </div>
        );
    }
}

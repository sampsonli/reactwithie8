
import React from 'react';
import classNames from 'classnames';
import {UCWEBURL, EWTURL, STUDYURL} from '~/common/config';

import css from './style.less';

export default class SitNav extends React.Component {
    constructor(args) {
        super(args);
        this.state = {
            user: {},
        };
        this.init();
    }
    init = async () => {
        const user = await this._getUser();
        console.log(user);
        this.setState({user});
    };
    /**
     *  获取用户信息
     * @returns {Promise<any>}
     * @private
     */
    _getUser = () => new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = `${UCWEBURL}/Ajax/GetUser?type=1`;
        script.async = true;
        script.defer = true;
        const head = document.querySelector('head');
        head.appendChild(script);
        script.onload = () => {
            resolve(window.User);
            head.removeChild(script);
        };
    });
    render() {
        return (
            <div className="siteNav">
                <ul className={css.content}>
                    <li className={css.fl}>
                        <a href={`${EWTURL}/`} className={css.mrgR5}>首页</a>|
                        <a href={`${STUDYURL}/`} className={classNames(css.mrgR5, css.mrgL5)}>E讲堂</a>|
                        <a href="/" className={classNames(css.mrgR5, css.mrgL5)}>心灵成长</a>|
                        <a href={`${EWTURL}/Apply`} className={classNames(css.mrgR5, css.mrgL5)}>生涯规划</a>|
                        <a href={`${EWTURL}/News`} className={classNames(css.mrgR5, css.mrgL5)}>高中资讯</a>|
                        <a href={`${EWTURL}/skip/bbs?fromurl=http://bbs.ewt360.com/`} target="_blank" rel="noopener noreferrer" className={classNames(css.mrgL5)}>E社区</a>
                    </li>
                    <li className={css.fr}>
                        <a href={`${EWTURL}/template/download/`} className={css.mrgR5} target="_blank" rel="noopener noreferrer">手机客户端</a>|

                        {
                            this.state.user.IsLogin && (
                                <div className={css.loginStatus}>
                                    <a href={`${EWTURL}/member`} className={classNames(css.mrgL5, css.loginStatusName)} target="_blank">
                                        <span>{this.state.user.RealName}</span><span className={css.arrow} />
                                    </a>
                                    <dl className={css.lgStatusDrop} style={{display: 'none'}}>
                                        <dd><a href={`${EWTURL}/member/UserInfo`} target="_blank">我的账号</a></dd>
                                        <dd><a href={`${EWTURL}/member/notice`} target="_blank">我的消息</a></dd>
                                        <dd><a href={`${EWTURL}/Member/MyOrder`}>我的订单</a></dd>
                                        <dd><a href={`${STUDYURL}/Login/Logout`}>退出</a></dd>
                                    </dl>
                                </div>
                            )
                        }
                        {
                            !this.state.user.IsLogin && (<div className={css.loginStatus}>
                                <a href="http://passport.ewt360.com/login" className={classNames(css.mrgR5, css.mrgL5)}>登录</a>|
                                <a href="http://www.ewt360.com/Register2/Register" className={css.mrgL5}>注册</a>
                            </div>)
                        }
                    </li>
                </ul>
            </div>

        );
    }
}

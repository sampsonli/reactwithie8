
import React from 'react';
// import classNames from 'classnames';

import css from './style.less';

export default class SitNav extends React.Component {
    render() {
        return (
            <div className="siteNav" id="siteNav">
                <ul className="W1000 clearfix">
                    <li className="fl">
                        <a href="http://www.ewt360.com" className="mrgR5">首页</a>|
                        <a href="http://study.ewt360.com" className="mrgL5 mrgR5">E讲堂</a>|
                        <a href="/" className="mrgL5 mrgR5">心灵成长</a>|
                        <a href="http://www.ewt360.com/Apply" className="mrgL5 mrgR5">生涯规划</a>|
                        <a href="http://www.ewt360.com/News" className="mrgL5 mrgR5">高中资讯</a>|
                        <a href="http://www.ewt360.com/skip/bbs?fromurl=http://bbs.ewt360.com/" target="_blank" className="mrgL5">E社区</a>
                    </li>
                    <li className="fr">
                        <a href="http://www.ewt360.com/template/download/" className="mrgR5" target="_blank">手机客户端</a>|
                        <div className="loginStatus" id="loginStatus">
                            <a href="http://passport.ewt360.com/login" className="mrgL5 mrgR5">登录</a>|
                            <a href="http://www.ewt360.com/Register2/Register" className="mrgL5">注册</a>
                        </div>
                    </li>
                </ul>
            </div>

        );
    }
}

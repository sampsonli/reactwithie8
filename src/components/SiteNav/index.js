import React, {Component} from 'react';
import {Link} from 'react-router'
import style from './style.css';
export default class SiteNav extends Component {

    render () {
        return (
            <div className={style.siteNav} id="siteNav">
                    <ul className={[style.W1000]}>
                        <li className={style.fl}>
                            <a href="http://www.ewt360.com/" className={style.mrgR5}>首页</a>|
                            <a href="http://study.ewt360.com/KeCheng/Index" className={style.marginH}>E讲堂</a>|
                            <a href="http://xinli.ewt360.com" className={style.marginH}>心灵成长</a>|
                            <a href="http://www.ewt360.com/Apply" className={style.marginH}>生涯规划</a>|
                            <a href="http://www.ewt360.com/News" className={style.marginH}>高中资讯</a>|
                            <a href="http://www.ewt360.com/skip/bbs?fromurl=http%3a%2f%2fbbs.ewt360.com%2fforum.php" target="_blank" className={style.mrgL5}>e社区</a>
                        </li>
                        <li className={style.fr}>
                            <a href="http://www.ewt360.com/template/download/" className={style.mrgR5}>手机客户端</a>|
                            <div className="loginStatus" id="loginStatus" style={{display: 'none'}}>
                                <a href="http://www.ewt360.com/member" className="mrgL5 loginStatusName" target="_blank"><span id="loginStatusName"></span><span className="arrow"></span></a>
                                <dl className="lgStatusDrop">
                                    <dd><a href="http://www.ewt360.com/member/UserInfo" target="_blank">我的账号</a></dd>
                                    <dd><a href="http://www.ewt360.com/member/notice" target="_blank">我的消息</a></dd>
                                    <dd><a href="http://www.ewt360.com/Member/MyOrder">我的订单</a></dd>
                                    <dd><a href="http://study.ewt360.com/Login/Logout">退出</a></dd>
                                </dl>
                            </div>
                        </li>
                    </ul>
            </div>
        )
    }
}
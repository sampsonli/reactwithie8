
import React from 'react';
import { Link } from 'react-router'
import style from './style.css';
import SiteNav from '~components/SiteNav';

export default class Live extends React.Component {
    render() {
        return (
            <div>
                <SiteNav></SiteNav>

                <div className={style.main}>
                    <ul className={style.selector} style={{ top: '36px', height: '666px' }}>
                        <li>
                            <Link to={`/live/list/all`} className={style.nav} activeClassName={style.cur}>全部直播</Link>
                        </li>
                        <li>
                            <Link to={`/live/list/reback`} className={style.nav} activeClassName={style.cur}>直播回放</Link>

                        </li>
                        <li>
                            <Link to={`/live/list/mylive`} className={style.nav} activeClassName={style.cur}>我的直播</Link>

                        </li>
                        <li>
                            <Link to={`/live/list/concern`} className={style.nav} activeClassName={style.cur}>我的关注</Link>

                        </li>
                        <li>
                            <Link to={`/live/list/acount`} className={style.nav} activeClassName={style.cur}>我的账单</Link>

                        </li>
                        <li><a href="http://www.ewt360.com/skip/bbs?fromurl=http%3a%2f%2fbbs.ewt360.com%2fforum.php%3fmod%3dforumdisplay%26fid%3d116" className={style.nav} target="_blank">直播社区</a></li>
                        <li className={style.brand}></li>
                    </ul>
                    <div className={style.content}>
                        {this.props.children}
                    </div>

                </div>
            </div>
        );
    }
}

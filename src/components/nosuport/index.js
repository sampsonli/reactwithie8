
import React from 'react';
import classNames from 'classnames';

import css from './style.scss';



export default class NoSuport extends React.Component {
    render() {
        return (
            <div className={css.content}>

                <div className={css['logo-wrap']}>
                    <div className={css.logo} />
                    <div className={css.txt}>
                        Oops,当前浏览器不支持， 请更新或使用<a href="https://www.google.cn/chrome/">chrome</a>浏览器
                    </div>
                </div>
            </div>

        );
    }
}

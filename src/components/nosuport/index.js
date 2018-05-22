
import React from 'react';

import css from './style.scss';
import classNames from 'classnames';



export default class NoSuport extends React.Component {
    constructor(props) {
        super(props);


    }




    render() {

        return (


            <div className={css.content}>

                <div className={css['logo-wrap']}>
                    <div className={css.logo}></div>
                    <div className={css.txt}>
                        Oops,当前浏览器不支持， 请更新或使用<a href="https://www.google.cn/chrome/">chrome</a>浏览器
                    </div>
                </div>
            </div>

        );
    }
}

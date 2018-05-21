
import React from 'react';

import css from './style.scss';

import classNames from 'classnames';



export default class ErrorPage extends React.Component {
    constructor(props) {
        super(props);

    }



    render() {

        return (
            <div>
                <div className={css.logo}></div>
                <div className={css.tips}>
                    糟糕！个人报告被UFO吸走了！<br />
                    我们正在奋力拦截，请稍后重试刷新当前页面。
                </div>
                <div className={css.btn} onClick={this.props.onClick}>刷新看看</div>

            </div>
        );
    }
}

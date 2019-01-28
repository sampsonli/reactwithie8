// import {connect} from 'react-redux';
import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';
import css from './style/index.css';
// @connect(state => ({}), dispatch => bindActionCreators({}, dispatch))
export default class Jyez extends Component {
    static propTypes = {
        children: PropTypes.element.isRequired,
    }

    render() {
        return (
            <div className={css.main}>
                <div className={css.jyez_ct}>

                    <div className={css.container__header}>
                        <a href="/GoodPost/BySelf">
                            <div className={classNames(css.header__title, css.self)}/>
                        </a>
                        <a href="http://xinliqa.ewt360.com/QA/Index">
                            <div className={classNames(css.header__title, css.others)}/>
                        </a>
                    </div>
                    <div>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

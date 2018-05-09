
import React from 'react';
import { Link } from 'react-router'
import css from './style.scss';
import axios from 'axios';
import classNames from 'classnames';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


class ErrorPage extends React.Component {
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
                <div className={css.btn}>刷新看看</div>

            </div>
        );
    }
}


const mapStateToProps = state => ({
    status: state.toggle,
});


//bindActionCreators is just a potting for dispatch single action
const mapDispatchToProps = dispatch => ({

    async onToggleClick() {
        const res = await axios.get('http://ews.500.com/score/zq/baseinfo?fid=711484')
        dispatch({ type: 'TOGGLE', payload: res });
    },

});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ErrorPage);
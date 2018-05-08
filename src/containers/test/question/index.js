
import React from 'react';
import { Link } from 'react-router'
import style from './style.scss';
import axios from 'axios';
import classNames from 'classnames';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class QuestionPage extends React.Component {
    constructor(props) {
        super(props);
        let years = [];
        for (let i = 1980; i <= 2018; i++) {
            years.push({ value: i, label: i })
        }
        let months = [];
        for (let i = 1; i <= 12; i++) {
            months.push({ value: i, label: i })
        }
        let days = [];
        for (let i = 1; i <= 31; i++) {
            days.push({ value: i, label: i })
        }
        this.state = {
            years,
            months,
            days,
            year: 2018,
            month: 1,
            day: 1,
        }
    }

    updateValue = (type, newValue) => {
        this.setState({ [type]: newValue })
    }

    render() {

        return (
            <div>
                <div className={style.header}>5.  我很容易感到很沮丧或郁闷。【排序题】</div>
                <div className={style.ct}>
                    <ul>
                        <li className={classNames(style.option, style.sopt)}>没有， 我很容易感到很沮丧或郁闷。</li>
                        <li className={classNames(style.option, style.one)}>没有， 我很容易感到很沮丧或郁闷。</li>
                        <li className={classNames(style.option, style.sopt)}>没有， 我很容易感到很沮丧或郁闷。</li>
                        <li className={classNames(style.option, style.sopt)}>没有， 我很容易感到很沮丧或郁闷。</li>



                    </ul>

                <div className={style.next}>下一题</div>
                <div className={style.pre}>上一题</div>

                </div>
                <div className={style.barwrap}>
                    <div className={style.bar}><i></i></div>



                </div>


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
)(QuestionPage);
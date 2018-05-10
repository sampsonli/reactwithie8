
import React from 'react';
import { Link } from 'react-router'
import style from './style.scss';
import axios from 'axios';
import classNames from 'classnames';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Select from 'react-select';
import 'react-select/dist/react-select.css';

class StartPage extends React.Component {
    constructor(props) {
        super(props);
        let years = [];
        for(let i = 1980; i<= 2018; i++) {
            years.push({value: i, label: i})
        }
        let months = [];
        for(let i = 1; i<= 12; i++) {
            months.push({value: i, label: i})
        }
        let days = [];
        for(let i = 1; i<= 31; i++) {
            days.push({value: i, label: i})
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
        this.setState({[type]: newValue})
    }

    render() {

        return (
            <div>
                <div className={style.header}>基本信息填写</div>
                <div className={classNames(style.item)}><span>姓名：</span><input /></div>
                <div className={classNames(style.item)}><span>性别：</span><input type="radio" name="sex" />男 <input type="radio" name="sex" />女  </div>
                <div className={classNames(style.item, style.birth)}><span>出生年月：</span>
                    <Select className={style.daysel} options={this.state.years} value={this.state.year}
					onChange={(newValue) => this.updateValue('year', newValue)}/>
                    <Select className={style.daysel} options={this.state.months} value={this.state.month}
					onChange={(newValue) => this.updateValue('month', newValue)} />
                    <Select className={style.daysel} options={this.state.days} value={this.state.day}
					onChange={(newValue) => this.updateValue('day', newValue)}/>
                </div>
                <div className={style.nextstep}>下一题</div>
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
)(StartPage);
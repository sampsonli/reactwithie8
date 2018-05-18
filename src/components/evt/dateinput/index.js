
import React from 'react';

import style from './style.scss';

import classNames from 'classnames';

import Select from 'react-select';
import 'react-select/dist/react-select.css';


export default class DateInput extends React.Component {
    static props = {
        onChange: React.PropTypes.func,
        value: React.PropTypes.string,
    }
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


        let [year, month, day] = this.props.value && this.props.value.split('-') || ['', '', '']

        this.state = {
            years,
            months,
            days,
            year,
            month,
            day,
        }

    }
    updateValue = (type, newValue) => {
        if (!newValue) return;
        this.setState({ [type]: newValue.value });
        setTimeout(() => {
            if (this.state.year && this.state.month && this.state.day) {
                console.log([this.state.year, this.state.month, this.state.day].join('-'))
                this.props.onChange && this.props.onChange([this.state.year, this.state.month, this.state.day].join('-'))
            }
        }, 16.6);
        

    }
    render() {

        return (
            <div className={style.wrap}>
                <Select clearable={false} placeholder="选择年" className={style.daysel} options={this.state.years} value={this.state.year}
                    onChange={(newValue) => this.updateValue('year', newValue)} />
                <Select clearable={false} placeholder="选择月" className={style.daysel} options={this.state.months} value={this.state.month}
                    onChange={(newValue) => this.updateValue('month', newValue)} />
                <Select clearable={false} placeholder="选择日" className={style.daysel} options={this.state.days} value={this.state.day}
                    onChange={(newValue) => this.updateValue('day', newValue)} />
            </div>

        );
    }
}



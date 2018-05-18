
import React from 'react';

import style from './style.scss';

import classNames from 'classnames';

import Select from 'react-select';
import 'react-select/dist/react-select.css';


export default class DateInput extends React.Component {
    static props = {
        onChange: React.PropTypes.func,
        value: React.PropTypes.string,
        options: React.PropTypes.array,
    }
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value,
            options: this.props.options
        }
        console.log(this.props.options)

       

    }
    updateValue = (newValue) => {
    

        newValue && this.props.onChange && this.props.onChange(newValue)

        

    }
    render() {

        return (
            <div className={style.wrap}>
                <Select clearable={false} placeholder={this.props.placeholder} className={style.daysel} options={this.props.options} value={this.props.value}
                    onChange={(newValue) => this.updateValue(newValue.value)} />
               
            </div>

        );
    }
}



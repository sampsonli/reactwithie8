
import React from 'react';
import style from './style.scss';
import axios from 'axios';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export default class TestPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={style.wrap}>
                <div className={style.content}>

                    {this.props.children}
                </div>

                <div className={style.reports}>* 个人报告／年级报告／班级报告</div>




            </div>
        );
    }
}


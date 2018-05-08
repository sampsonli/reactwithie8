
import React from 'react';
import { Link } from 'react-router'
import style from './style.scss';
import axios from 'axios';
import classNames from 'classnames';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Dialog from '~components/test/dialog';

class HomePage extends React.Component {
    constructor(props) {
        super(props);

    }



    render() {
        console.log(Dialog)

        return (
            <div>
                <Dialog></Dialog>
                <div className={style.header}>高中生心里健康诊断</div>
                <div className={style.ct}>
                    <div className={style.zhidao}>
                        <p>指导语： 本测验总共有90个题目本测验总共有90个题目本测验总共有90个题目本测验总共有90个题目本测验90个题目本测验总共有90个题目本测验总共有90个题目本测验总共有90个题目本测验总共有90个题目</p>
                        <ul className={style.tips}>
                            <li>1. 请认真回答没一套题</li>
                            <li>2. 请认真回答没一套题</li>
                            <li>3. 请认真回答没一套题</li>
                        </ul>



                    </div>
                    <div className={style.nextstep}>下一题</div>
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
)(HomePage);
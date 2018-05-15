
import React from 'react';
import { Link } from 'react-router'
import style from './style.scss';
import axios from 'axios';
import classNames from 'classnames';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '~actions/evtActions';

// import Dialog from '~components/test/dialog';

class StarterPage extends React.Component {
    static contextTypes = {
        router: Object
    };
    constructor(props, context) {
        super(props, context);
        this.router = context.router;
        this.fetchData();
    }

    fetchData = async () => {
        await this.props.getMetaInfo(this.props.qsparams.evalid)


    }

    render() {

        return (
            <div>
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
                    <div className={style.nextstep} onClick={() => this.router.push('/evt/info')}>下一题</div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => ({ metaInfo: state.evt.metaInfo, qsparams: state.evt.qsparams });


//bindActionCreators is just a potting for dispatch single action
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(StarterPage);
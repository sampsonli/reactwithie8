
import React from 'react';
import { Link } from 'react-router'
import style from './style.scss';
import axios from 'axios';
import classNames from 'classnames';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '~actions/evtActions';
import { parseQueryString, getToken } from '~/common/util';
import { maindomain } from '~/common/config';

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

    initUser = () => {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = `${maindomain}/Ajax/GetUser?type=1`;
            document.head.appendChild(script);
            script.onload = () => {
                document.head.removeChild(script);
                resolve(window.User);
            }
        })

    }

    fetchData = async () => {
        try {
            if (!this.props.qsparams.orderNo) {
                if(this.props.qsparams.assist) { //本地辅助生成订单号， 仅供测试用
                    const user = await this.initUser();
                    if (!user.IsLogin) {
                        throw new Error('登陆已过期');
                    }
                    let orderNo = await this.props.createOrderNo({
                        userId: user.UserID,
                        evalId: this.props.qsparams.evalId,
                        taskId: this.props.qsparams.taskId,
                        sourcePlatform: 1,
                        clientId: this.props.qsparams.clientId,
                        realName: user.RealName,
                        encodeStr: this.props.qsparams.encodeStr,
                    });
                    this.props.setSearchParams({orderNo});
                    this.router.replace({ pathname: this.props.location.pathname, search: '?orderNo=' + orderNo});
                    await this.props.getMetaInfo(orderNo);
                } else {
                    throw new Error('订单号不能为空!!!');
                }
                
            } else {
                const metaInfo = await this.props.getMetaInfo(this.props.qsparams.orderNo);
                if(!metaInfo) {
                    throw new Error('当前订单暂无数据');
                }
                
            }

        } catch (e) {
            // 未登录情况不处理
            if (e.code === '2001106') {
                
            } else {
                alert(e.message);
                if(e.code === '1002205')  {
                    this.router.push({ pathname: 'report/student', search: this.props.location.search });
                }

            }
            
        }
    }


    beginTest = async () => {
        const search = this.props.location.search;
        this.router.push({ pathname: 'evt/info', search, })

    }

    render() {
        if (!this.props.metaInfo) {
            return <div />
        }


        return (
            <div>
                <div className={style.header}>{this.props.metaInfo.title}</div>
                <div className={style.ct}>
                    <div className={style.zhidao} dangerouslySetInnerHTML={{ __html: this.props.metaInfo.webGuideContent }}>
                    </div>

                    <div className={style.nextstep} onClick={this.beginTest}>开始答题</div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => ({ metaInfo: state.evt.metaInfo, qsparams: state.evt.qsparams });


//bindActionCreators is just a potting for dispatch single action
const mapDispatchToProps = dispatch => bindActionCreators({ ...actions, setSearchParams: (params) => ({ type: 'EVT_SET_SEARCH_PARAMS', payload: params }) }, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(StarterPage);
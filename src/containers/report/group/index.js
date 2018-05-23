
import React from 'react';
import { Link } from 'react-router'
import css from './style.scss';
import classNames from 'classnames';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { isIE89 } from '~/common/util';
import { getGroupReport } from '~actions/evtActions';
import NoSuport from '~components/nosuport';

import { parseQueryString } from '~/common/util';

class ClassesPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            report: null,
            qsparams: parseQueryString('/' + this.props.location.search),
            sort: 0,
        }
        this.getData();


    }
    getData = async () => {
        let report = await this.props.getGroupReport({
            decodeStr: this.state.qsparams.decodeStr || '', // 加密字符串
            type: this.state.qsparams.type || 2,  // 2 班级报告， 3 年级报告
            clientId: this.state.qsparams.clientId || 1,
        })
        if (report.reportDate) {
            let time = new Date(report.reportDate);
            let year = time.getFullYear();
            let month = time.getMonth() + 1;
            let day = time.getDate()
            report.reportDate = [year, month, day].join('-')
        }

        // 默认班级排序
        report.warnStudentList.sort((a, b) => {
            if (a.className > b.className) {
                return 1
            } else if (a.className == b.className) {
                return 0;
            } else {
                return -1
            }
        })



        this.setState({ report })

    }
    sortBy = (sort) => {
        let warnStudentList = [...this.state.report.warnStudentList];
        if (sort === 0) { // 班级排序
            warnStudentList.sort((a, b) => {
                if (a.className > b.className) {
                    return 1
                } else if (a.className == b.className) {
                    return 0;
                } else {
                    return -1
                }
            })

        } else { // 危险系数倒序
            warnStudentList.sort((a, b) => {
                if (a.warningInfos[7].value > b.warningInfos[7].value) {
                    return -1
                } else if (a.warningInfos[7].value == b.warningInfos[7].value) {
                    return 0;
                } else {
                    return 1
                }
            })
        }
        let report = { ...this.state.report };
        report.warnStudentList = warnStudentList;
        this.setState({ report, sort })

    }





    render() {
        if (isIE89) {
            return <NoSuport />
        }
        if (!this.state.report) {
            return <div></div>
        }

        return (


            <div className={css.content}>
                <header className={css.header}>
                    <div className={css.title}>

                        {this.state.report.title && this.state.report.title.substr(0, 3)}<br />
                        {this.state.report.title.length > 3 && this.state.report.title.substr(3)}

                        <br /><span className={css.subtitle}>集体分析报告</span>
                    </div>
                    <div className={css.info}>


                        {this.state.qsparams.type == '2' && this.state.report.className && (<span className={css.igrade}>班级：  {this.state.report.className}</span>)}

                        {this.state.qsparams.type == '3' && this.state.report.gradeName && (<span className={css.igrade}>年级：  {this.state.report.gradeName}</span>)}
                        <br />

                        {this.state.qsparams.type == '3' && this.state.report.className && <span>班级：  {this.state.report.className}</span>}
                        <br />

                        {this.state.report.schoolName && <span>学校：  {this.state.report.schoolName}</span>}
                        <br />
                        {this.state.report.reportNo && <span> 报告编号：  {this.state.report.reportNo}</span>}
                        <br />
                        {this.state.report.reportDate && <span>报告日期：  {this.state.report.reportDate}</span>}


                    </div>
                    <div className={css.btips}>本报告为保密资料，仅供相关个人参考，请妥善保管</div>
                </header>
                <iframe className={css.iframe} src={this.state.report.reportUrl} />
                <div className={css.fulu}>附录：预警学生名单</div>
                <div>
                    <div className={css.assist}><span className={css.sums}>共{this.state.report.warnStudentList.length}人</span>
                        <span className={classNames(css.fenx, { [css.gray]: this.state.sort === 0, [css.darkb]: this.state.sort === 1 })} onClick={() => this.sortBy(1)}>风险由高到低</span>
                        <span className={classNames(css.default, { [css.gray]: this.state.sort === 1, [css.darkb]: this.state.sort === 0 })} onClick={() => this.sortBy(0)}>默认排序</span></div>
                    <table className={css.table}>
                        <thead>
                            <tr className={css.t_header}>
                                <th width="100">班级</th>
                                <th width="80">姓名</th>
                                <th>违纪行为</th>
                                <th>注意缺陷</th>
                                <th>社交问题</th>
                                <th>思维问题</th>
                                <th>躯体反应</th>
                                <th>焦虑抑郁</th>
                                <th>行为退缩</th>
                                <th>攻击行为</th>

                                <th className={css.t_weix}>总体风险</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.report.warnStudentList.map((row, idx) => (
                                <tr key={idx} className={classNames(css.t_row, { [css.row_odd]: idx % 2 === 0 })}>
                                    <td>{row.className}</td>
                                    <td>{row.userName}</td>
                                    <td className={classNames({ [css.c_yz]: row.warningInfos[0].riskLevel === 4, [css.c_warn]: row.warningInfos[0].riskLevel === 3 })}>{row.warningInfos[0].value.toFixed(2)}</td>
                                    <td className={classNames({ [css.c_yz]: row.warningInfos[1].riskLevel === 4, [css.c_warn]: row.warningInfos[1].riskLevel === 3 })}>{row.warningInfos[1].value.toFixed(2)}</td>
                                    <td className={classNames({ [css.c_yz]: row.warningInfos[2].riskLevel === 4, [css.c_warn]: row.warningInfos[2].riskLevel === 3 })}>{row.warningInfos[2].value.toFixed(2)}</td>
                                    <td className={classNames({ [css.c_yz]: row.warningInfos[3].riskLevel === 4, [css.c_warn]: row.warningInfos[3].riskLevel === 3 })}>{row.warningInfos[3].value.toFixed(2)}</td>
                                    <td className={classNames({ [css.c_yz]: row.warningInfos[4].riskLevel === 4, [css.c_warn]: row.warningInfos[4].riskLevel === 3 })}>{row.warningInfos[4].value.toFixed(2)}</td>
                                    <td className={classNames({ [css.c_yz]: row.warningInfos[5].riskLevel === 4, [css.c_warn]: row.warningInfos[5].riskLevel === 3 })}>{row.warningInfos[5].value.toFixed(2)}</td>
                                    <td className={classNames({ [css.c_yz]: row.warningInfos[6].riskLevel === 4, [css.c_warn]: row.warningInfos[6].riskLevel === 3 })}>{row.warningInfos[6].value.toFixed(2)}</td>
                                    <td className={classNames({ [css.c_yz]: row.warningInfos[7].riskLevel === 4, [css.c_warn]: row.warningInfos[7].riskLevel === 3 })}>{row.warningInfos[7].value.toFixed(2)}</td>

                                    <td>{row.warningInfos[7].value.toFixed(2)}（{classNames({ '正常': row.warningInfos[7].riskLevel === 1, '轻度': row.warningInfos[7].riskLevel === 2, '中度': row.warningInfos[7].riskLevel === 3, '严重': row.warningInfos[7].riskLevel === 4 })}）</td>


                                </tr>
                            ))}

                        </tbody>
                    </table>
                    <div className={css.tips}>
                        <span className={css.yzwt}><i />存在较严重问题</span>
                        <span className={css.czyb}><i />存在一定问题</span>
                        <span className={css.normal}><i />正常</span>
                    </div>
                    <div className={css.ftips}>分数越大表示学生在这方面的问题越严重，负数表示在此方面正常或无发生此问题的风险。可以按照总体风险由高到低排序。</div>

                </div>


            </div>

        );
    }
}


const mapStateToProps = state => ({
    qsparams: state.evt.qsparams,

});


//bindActionCreators is just a potting for dispatch single action
const mapDispatchToProps = dispatch => bindActionCreators({
    getGroupReport


}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ClassesPage);
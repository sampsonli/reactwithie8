
import React from 'react';
import { Link } from 'react-router'
import css from './style.scss';
import classNames from 'classnames';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getPersonalReport } from '~actions/evtActions';
import { isIE89 } from '~/common/util';
import NoSuport from '~components/nosuport';


class StudentPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            report: null,
            orderNo: null,
        }
        this.getReport();


    }


    getReport = async () => {
        try {
            let orderNo = ~this.props.location.search.indexOf('orderNo=') && this.props.location.search.split('orderNo=')[1].split('&')[0] || '';
           let report = await this.props.getPersonalReport({ orderNo })

            if (report.reportDate) {
                let time = new Date(report.reportDate);
                let year = time.getFullYear();
                let month = time.getMonth() + 1;
                let day = time.getDate()
                report.reportDate = [year, month, day].join('-')
            }
            this.setState({ report, orderNo })
        } catch (e) {
             // 未登录情况不处理
             if (e.code !== '2001106') {
                alert(e.message)
            }
            
        }


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
                        <br /><span className={css.subtitle}>个人分析报告</span></div>
                    <div className={css.info}>
                        {this.state.report.userName && <div className={css.igrade}>姓名：  {this.state.report.userName}</div>}
                        {this.state.report.className && <div>班级：  {this.state.report.className}</div>}
                        {this.state.report.schoolName && <div>学校：  {this.state.report.schoolName}</div>}
                        {this.state.report.reportNo && <div>报告编号： {this.state.report.reportNo}</div>}
                        {this.state.report.reportDate && <div>报告日期：  {this.state.report.reportDate}</div>}
                    </div>
                    <div className={css.btips}>本报告为保密资料，仅供相关个人参考，请妥善保管</div>
                </header>
                <iframe className={css.iframe} src={this.state.report.resultUrl} />


            </div>

        );
    }
}


const mapStateToProps = state => ({

});


//bindActionCreators is just a potting for dispatch single action
const mapDispatchToProps = dispatch => bindActionCreators({
    getPersonalReport
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(StudentPage);
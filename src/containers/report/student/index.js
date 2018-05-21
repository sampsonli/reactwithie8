
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
            let orderNo = ~this.props.location.search.indexOf('orderNo=')&&this.props.location.search.split('orderNo=')[1].split('&')[0]||'';
            let clientId =  ~this.props.location.search.indexOf('clientId=')&&this.props.location.search.split('clientId=')[1].split('&')[0]||1;
            let enCodeStr =  ~this.props.location.search.indexOf('enCodeStr=')&&this.props.location.search.split('enCodeStr=')[1].split('&')[0]||'';
            let report = await this.props.getPersonalReport({orderNo, clientId, enCodeStr})

            if (report.reportDate) {
                let time = new Date(report.reportDate);
                let year = time.getFullYear();
                let month = time.getMonth() + 1;
                let day = time.getDate()
                report.reportDate = [year, month, day].join('-')
            }
            this.setState({ report, orderNo })
        } catch (e) {
            alert(e.message);
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
                    <div className={css.title}>中学生<br />压力测试<br /><span className={css.subtitle}>个人分析报告</span></div>
                    <div className={css.info}>
                        {this.state.report.userName && <span className={css.igrade}>姓名：  {this.state.report.userName}</span>}
                        <br />
                        {this.state.report.className && <span>班级：  {this.state.report.className}</span>}
                        <br />
                        {this.state.report.schoolName && <span>学校：  {this.state.report.schoolName}</span>}
                        <br />
                        {this.state.report.reportNo && <span>报告编号： {this.state.report.reportNo}</span>}
                        <br />
                        {this.state.report.reportDate && <span>报告日期：  {this.state.report.reportDate}</span>}
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
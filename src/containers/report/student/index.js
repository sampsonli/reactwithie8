
import React from 'react';
import { Link } from 'react-router'
import css from './style.scss';
import classNames from 'classnames';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getPersonalReport } from '~actions/evtActions';


class StudentPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            report: null,
            orderNo: null,
        }
        this.getReport();

    }


    getReport = async ()  => {
        if(~this.props.location.search.indexOf('orderNo')) {
            try {
                let orderNo = this.props.location.search.split('orderNo=')[1].split('&')[0]
                let report = await this.props.getPersonalReport(orderNo)
                this.setState({report, orderNo})
            } catch(e) {
                alert(e.message);
            }
            
        }
       

    }





    render() {
        if(!this.state.report) {
            return <div></div>
        }

        return (


            <div className={css.content}>
                <header className={css.header}>
                    <div className={css.title}>中学生<br />压力测试<br /><span className={css.subtitle}>年级分析报告</span></div>
                    <div className={css.info}>
                        <span className={css.igrade}>姓名：  {this.state.report.userName}</span><br />
                        <span>班级：  {this.state.report.className}
                            <br />
                            学校：  {this.state.report.schoolName}<br />
                            报告编号： {this.state.orderNo}<br/>
                            报告日期：  2017-08-08


                        </span>

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

import React from 'react';
import { Link } from 'react-router'
import css from './style.scss';
import classNames from 'classnames';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


class ClassesPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: [0, 1, 2, 3, 4]
        }

    }



    render() {

        return (


            <div>
                <div>
                    <div className={css.assist}><span className={css.sums}>共12人</span><span className={css.fenx}>风险由高到低</span><span className={css.default}>默认排序</span></div>
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
                                <th>攻击行为</th>
                                <th className={css.t_weix}>总体风险</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.rows.map((row, idx) => (
                                <tr key={row} className={classNames(css.t_row, { [css.row_odd]: idx % 2 === 0 })}>
                                    <td>高一（1）班</td>
                                    <td>张三</td>
                                    <td>3.24</td>
                                    <td>3.24</td>
                                    <td>3.24</td>
                                    <td>3.24</td>
                                    <td>3.24</td>
                                    <td>3.24</td>
                                    <td>3.24</td>
                                    <td>3.24</td>
                                    <td>3.24</td>
                                    <td>3.24（严重）</td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                    <div className={css.tips}>
                            <span className={css.yzwt}><i/>存在较严重问题</span>
                            <span className={css.czyb}><i/>存在一定问题</span>
                            <span className={css.normal}><i/>正常</span>
                    </div>
                    <div className={css.ftips}>分数越大表示学生在这方面的问题越严重，负数表示在此方面正常或无发生此问题的风险。可以按照总体风险由高到低排序。</div>

                </div>


            </div>

        );
    }
}


const mapStateToProps = state => ({

});


//bindActionCreators is just a potting for dispatch single action
const mapDispatchToProps = dispatch => ({


});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ClassesPage);
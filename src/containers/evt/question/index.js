
import React from 'react';
import { Link } from 'react-router'
import style from './style.scss';
import classNames from 'classnames';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '~actions/evtActions';

class QuestionPage extends React.Component {
    constructor(props) {
        super(props);
        this.props.getQuestionList()
        this.state = {
            currentIdx: 0,
            select: {},
            answers: [],
        }

    }


    render() {
        if (this.props.qlist) {
            const current = this.props.qlist[this.state.currentIdx];
            return (
                <div>
                    <div className={style.header}>5.  {current.questionTitle}【排序题】</div>
                    <div className={style.ct}>
                        <ul>
                            <li className={classNames(style.option, style.sopt)}>没有， 我很容易感到很沮丧或郁闷。</li>
                            <li className={classNames(style.option, style.one)}>没有， 我很容易感到很沮丧或郁闷。</li>
                            <li className={classNames(style.option, style.sopt)}>没有， 我很容易感到很沮丧或郁闷。</li>
                            <li className={classNames(style.option, style.sopt)}>没有， 我很容易感到很沮丧或郁闷。</li>



                        </ul>

                        <div className={style.next}>下一题</div>
                        <div className={style.pre}>上一题</div>

                    </div>
                    <div className={style.barwrap}>
                        <div className={style.bar}><i></i></div>



                    </div>


                </div>
            );
        }
        return <div></div>


    }
}


const mapStateToProps = state => ({
    qlist: state.evt.qlist,
});


//bindActionCreators is just a potting for dispatch single action
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(QuestionPage);

import React from 'react';
import { Link } from 'react-router'
import style from './style.scss';
import classNames from 'classnames';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '~actions/evtActions';

class QuestionPage extends React.Component {
    constructor(args) {
        super(args);
        this.state = {
            prompt: true,
            dialog: false,
            currentIdx: 0,
            select: [],
            preIdx: 0,
            // select: [2],
            answers: [],
        }
        this.fetchData()

    }
    fetchData = async () => {
        const qlist = await this.props.getQuestionList();
        const questionMap = {}
        qlist.forEach((q, idx) => {
            questionMap[q.id] = idx;
        })
        this.questionMap = questionMap;

    }
    pre = () => {
        if (this.state.answers.length) {
            let answers = [...this.state.answers];
            // this.setState({...this.state, ...answers.pop(), answers})
            let options = answers.pop()
            if (answers.length) {
                let state = { ...this.state, ...options, answers }
                this.setState(state)
            } else {
                this.setState({ answers: [], select: options.select, preIdx: 0, currentIdx: 0, })
            }
        }


    }
    doSubmit = () => {

    }
    selectOne = (idx) => {
        const answers = [...this.state.answers]
        const nextqid = this.props.qlist[this.state.currentIdx].optionsList[idx].optionsJumpQuestionId;
        if (!nextqid && this.state.currentIdx === this.props.qlist.length - 1) {
            return this.doSubmit();
        }
        const nextcurrentIdx = nextqid || (this.state.currentIdx + 1)


        answers.push({
            currentIdx: nextcurrentIdx,
            select: [idx],
            preIdx: this.state.currentIdx
        })
        this.setState({ answers, currentIdx: nextcurrentIdx, select: [] })

    }


    render() {
        if (this.props.qlist) {
            const question = this.props.qlist[this.state.currentIdx];
            return (
                <div>
                    <div className={style.header}>{this.state.currentIdx+1}.  {question.questionTitle}【排序题】</div>
                    <div className={style.ct}>
                        {/* <ul>
                            <li className={classNames(style.option, style.sopt)}><i className={style.circle}>1</i>没有， 我很容易感到很沮丧或郁闷。</li>
                            <li className={classNames(style.option, style.one)}><i className={style.circle}>2</i>没有， 我很容易感到很沮丧或郁闷。</li>
                            <li className={classNames(style.option, style.sopt)}><i className={style.circle}>3</i>没有， 我很容易感到很沮丧或郁闷。</li>
                            <li className={classNames(style.option, style.sopt)}><i className={style.circle}>4</i>没有， 我很容易感到很沮丧或郁闷。</li>
                        </ul> */}


                        {question.questionType === 0 && (<ul>
                            {question.optionsList.map((option, idx) => (
                                <li className={style.option} key={option.id} onClick={() => this.selectOne(idx)}>
                                    <input className={style.radio} type="radio" name="sel" checked={this.state.select[0] === idx}/>
                                    <span>{option.optionName}</span>
                                </li>))}
                        </ul>)}


                        <div className={style.next}>下一题</div>
                        <div className={style.pre} onClick={this.pre}>上一题</div>

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
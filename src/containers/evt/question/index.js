
import React from 'react';
import { Link } from 'react-router'
import style from './style.scss';
import classNames from 'classnames';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '~actions/evtActions';

class QuestionPage extends React.Component {
    static contextTypes = {
        router: Object
    };
    constructor(args, context) {
        super(args, context);
        this.router = context.router;
        this.state = {
            prompt: true,
            isStop: false,
            isFinished: true,
            currentIdx: 0,
            select: [],
            preIdx: 0,
            // select: [2],
            answers: [],//[{currentIdx: 1, select: [1], preIdx: 0}]
            order: [],
            selectOk: false,
            islast: false,
            showConfirm: false,
        }
        this.fetchData()

        this.router.setRouteLeaveHook(
            this.props.route,
            this.routerWillLeave
        )


    }
    routerWillLeave = (nextLocation) => {
        if (this.state.prompt) {
            return '确认要离开？';
        }
    }


    // 排序选择
    selItem = (idx) => {
        let select = this.state.select;
        const max = select.filter(i => i !== undefined).reduce((i, c) => i > c ? i : c, -1);
        let nselect = [...select]
        if (nselect[idx] === undefined) {
            nselect[idx] = (max + 1);
        } else {
            let cval = nselect[idx];
            nselect[idx] = undefined;
            nselect.forEach((o, i) => {
                if (o > cval) {
                    nselect[i]--
                }
            })
        }
        let selectOk = nselect.filter(s => s !== undefined).length === this.props.qlist[this.state.currentIdx].optionsList.length;
        this.setState({ select: nselect, selectOk })

    }
    next = () => {
        if ((!this.state.selectOk && this.props.qlist[this.state.currentIdx].type !== 'intro') || this.state.islast) {
            return;
        }

        const answers = [...this.state.answers]

        let islast = false;
        if (this.state.currentIdx + 1 === this.props.qlist.length - 1) {
            islast = true;
        }
        answers.push({
            currentIdx: this.state.currentIdx,
            select: [...this.state.select],
            // preIdx: this.state.preIdx
        })
        this.setState({ answers, currentIdx: this.state.currentIdx + 1, select: [], selectOk: false, islast })


    }
    fetchData = async () => {
        try {
            const qlist = await this.props.getQuestionList({ orderNo: this.props.qsparams.orderNo });
            const questionMap = {}
            qlist.forEach((q, idx) => {
                questionMap[q.id] = idx;
            })
            this.questionMap = questionMap;
        } catch (e) {
            alert(e.message)
        }


    }
    pre = () => {
        if (this.state.answers.length) {
            let answers = [...this.state.answers];
            let options = answers.pop()
            if (answers.length) {
                let state = { ...this.state, ...options, answers, selectOk: true, islast: false }
                this.setState(state)
            } else {
                this.setState({ answers: [], select: options.select, preIdx: 0, currentIdx: 0, selectOk: true, islast: false })
            }
        }

    }
    doSubmit = async () => {
        if (!this.state.select.length && this.props.qlist[this.state.currentIdx].type !== 'intro') {
            return
        }
        let select = this.state.select;


        let usanswers = [...this.state.answers, { select, currentIdx: this.state.currentIdx }];
        let answerList = usanswers.filter(answer => answer.select.length).map((answer) => {
            const question = this.props.qlist[answer.currentIdx];
            return {
                question_id: question.id,
                option_ids: answer.select.map(idx => question.options[idx].id),
                type: question.type,
            }
        })

        try {
            let report = await this.props.submitRecord({ answerList, evalId: this.props.qsparams.evalid })
            console.log(report);
            this.setState({ prompt: false })
            this.router.replace({ pathname: 'report/classes', search: this.props.location.search });
        } catch (e) {
            alert(e.message)

        }


    }
    // 单选
    selectOne = (idx) => {
        if (this.state.islast) {
            return this.setState({ select: [idx], selectOk: true, showConfirm: true })
        }
        const answers = [...this.state.answers]
        const nextqid = this.props.qlist[this.state.currentIdx].options[idx].jump_question_id;
        // if (!nextqid && this.state.currentIdx === this.props.qlist.length - 1) {
        //     return this.doSubmit();
        // }
        const nextcurrentIdx = nextqid || (this.state.currentIdx + 1)


        answers.push({
            currentIdx: this.state.currentIdx,
            select: [idx],
            // preIdx: answers[answers.length-1].currentIdx
        })
        this.setState({ answers, currentIdx: nextcurrentIdx, select: [], selectOk: false, islast: nextcurrentIdx === this.props.qlist.length - 1 })

    }


    render() {
        if (this.props.qlist) {
            const question = this.props.qlist[this.state.currentIdx];
            return (
                <div>
                    <div className={style.header}>{this.state.currentIdx + 1}.  {question.title}{classNames({ '【排序题】': question.type === 'order_text', '【单选题】': question.questionType === 'radio_text' })}</div>
                    <div className={style.ct}>

                        {question.type === 'radio_text' && (<ul>
                            {question.options.map((option, idx) => (
                                <li className={style.option} key={option.id} onClick={() => this.selectOne(idx)}>
                                    <input className={style.radio} type="radio" name="sel" checked={this.state.select[0] === idx} />
                                    <span>{option.title}</span>
                                </li>))}
                        </ul>)}


                        {question.type === 'order_text' && (<ul>
                            {question.options.map((option, idx) => (
                                <li className={style.option} key={option.id} onClick={() => this.selItem(idx)}>
                                    <i className={classNames({ [style.circl_f]: this.state.select[idx] !== undefined, [style.circl_e]: this.state.select[idx] === undefined })}>{this.state.select[idx] === undefined || (this.state.select[idx] + 1)}</i>
                                    <span>{option.title}</span>
                                </li>))}
                        </ul>)}

                        {question.type === "intro" && (<div dangerouslySetInnerHTML={{ __html: question.options[0].content }}></div>)}



                        {/* {question.questionType === 'order_text' &&<div className={style.next}>下一题</div>} */}
                        <div className={style.pre} onClick={this.pre}>上一题</div>

                        {(question.type === "order_text" || question.type === 'intro') && !this.state.islast && <div className={classNames(style.next, { [style.gray]: !this.state.selectOk && question.type !== 'intro' })} onClick={this.next}>下一题</div>}
                        {this.state.islast && <div className={classNames(style.submit, { [style.gray]: !this.state.selectOk })} onClick={this.doSubmit}>提交</div>}


                    </div>
                    <div className={style.barwrap}>
                        <div className={style.bar}><i style={{ width: (this.state.currentIdx + 1) / this.props.qlist.length * 100 + '%' }}></i></div>



                    </div>


                </div>
            );
        }
        return <div></div>


    }
}


const mapStateToProps = state => ({
    qlist: state.evt.qlist,
    qsparams: state.evt.qsparams,
});


//bindActionCreators is just a potting for dispatch single action
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(QuestionPage);
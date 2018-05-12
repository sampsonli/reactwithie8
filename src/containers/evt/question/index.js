
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
            answers: [],//[{currentIdx: 1, select: [1], preIdx: 0}]
            order: [],
            selectOk: false,
            islast: false,
            showConfirm: false,
        }
        this.fetchData()

    }
    // 排序选择
    selItem = (idx) => {
        let select = this.state.select;
        const max = select.filter(i=>i!==undefined).reduce((i,c)=>i>c?i:c, -1);
        let nselect = [...select]
        if(nselect[idx] === undefined) {
            nselect[idx] = (max + 1);
        } else {
            let cval = nselect[idx];
            nselect[idx] = undefined;
            nselect.forEach((o,i) => {
                if(o>cval) {
                    nselect[i]--
                }
            })
        }
        let selectOk = nselect.filter(s => s!==undefined).length === this.props.qlist[this.state.currentIdx].optionsList.length;
        this.setState({select:nselect, selectOk})

    }
    next = () => {
        if(!this.state.selectOk) {
            return;
        }
    
        const answers = [...this.state.answers]

        let islast = false;
        if (this.state.currentIdx+1 === this.props.qlist.length - 1) {
            islast = true;
        }
        answers.push({
            currentIdx: this.state.currentIdx,
            select: [...this.state.select],
            // preIdx: this.state.preIdx
        })
        this.setState({ answers, currentIdx:  this.state.currentIdx + 1 , select: [], selectOk: false , islast})

       
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
            let options = answers.pop()
            if (answers.length) {
                let state = { ...this.state, ...options, answers, selectOk: true, islast: false }
                this.setState(state)
            } else {
                this.setState({ answers: [], select: options.select, preIdx: 0, currentIdx: 0, selectOk: true, islast: false})
            }
        }

    }
    doSubmit = () => {
        

        let usanswers  = [...this.state.answers, {select: this.state.select, currentIdx: this.state.currentIdx}];
        let params = usanswers.filter(answer => answer.select.length).map((answer) => {
            const question = this.props.qlist[answer.currentIdx];
            return {
                question_id: question.id,
                option_ids: answer.select.map(idx => question.optionsList[idx].id),
                type: question.questionType,
            }
        })
        console.log(params)


    }
    // 单选
    selectOne = (idx) => {
        if(this.state.islast) {
            return this.setState({select: [idx], selectOk: true,showConfirm: true})
        }
        const answers = [...this.state.answers]
        const nextqid = this.props.qlist[this.state.currentIdx].optionsList[idx].optionsJumpQuestionId;
        // if (!nextqid && this.state.currentIdx === this.props.qlist.length - 1) {
        //     return this.doSubmit();
        // }
        const nextcurrentIdx = nextqid || (this.state.currentIdx + 1)


        answers.push({
            currentIdx: this.state.currentIdx,
            select: [idx],
            // preIdx: answers[answers.length-1].currentIdx
        })
        this.setState({ answers, currentIdx: nextcurrentIdx, select: [], selectOk: false, islast:  nextcurrentIdx === this.props.qlist.length - 1})

    }


    render() {
        if (this.props.qlist) {
            const question = this.props.qlist[this.state.currentIdx];
            return (
                <div>
                    <div className={style.header}>{this.state.currentIdx+1}.  {question.questionTitle}【{classNames({'排序题':question.questionType === 'orderr_text', '单选题': question.questionType === 'radio_text'})}】</div>
                    <div className={style.ct}>
                    
                        {question.questionType === 'radio_text' && (<ul>
                            {question.optionsList.map((option, idx) => (
                                <li className={style.option} key={option.id} onClick={() => this.selectOne(idx)}>
                                    <input className={style.radio} type="radio" name="sel" checked={this.state.select[0] === idx}/>
                                    <span>{option.optionName}</span>
                                </li>))}
                        </ul>)}


                          {question.questionType === 'order_text' && (<ul>
                            {question.optionsList.map((option, idx) => (
                                <li className={style.option} key={option.id} onClick={() => this.selItem(idx)}>
                                    <i className={classNames({ [style.circl_f]: this.state.select[idx] !== undefined, [style.circl_e]: this.state.select[idx] === undefined })}>{this.state.select[idx] === undefined || (this.state.select[idx]+1)}</i>
                                    <span>{option.optionName}</span>
                                </li>))}
                        </ul>)}


                         {question.questionType === 'order_text' &&<div className={style.next}>下一题</div>}
                        <div className={style.pre} onClick={this.pre}>上一题</div>

                    </div>
                    <div className={style.barwrap}>
                        <div className={style.bar}><i style={{width: (this.state.currentIdx + 1) / this.props.qlist.length * 100 + '%'}}></i></div>



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
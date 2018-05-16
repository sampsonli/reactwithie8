
import React from 'react';
import { Link } from 'react-router'
import style from './style.scss';
import axios from 'axios';
import classNames from 'classnames';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import DateInput from '~components/evt/dateinput';
import * as actions from '~actions/evtActions';


class InfoPage extends React.Component {
    static contextTypes = {
        router: Object
    };
    constructor(args, context) {
        super(args, context);
        this.router = context.router;
        this.state = {
            // info: null,
            uselect: {}
        }
        this.initState();

    }

    initState = async () => {
        if (!this.props.info) {
            try {
                let info = await this.props.getBaseInfo(this.props.qsparams.orderNo);
                let basicInfo = info.basicInfo;
                let uselect = {};
                if (basicInfo) {
                    basicInfo.forEach((item) => {
                        if (item.type === 'radio') {
                            uselect[item.code] = item.options[0].value
                        } else if (item.type === 'date') {
                            uselect[item.code] = '2018-01-01';
                        }
                    })
                    this.setState({ uselect })
    
                }
            } catch(e) {
                alert(e.message)
            }
            
        } else {

            let basicInfo = this.props.info.basicInfo;
            let uselect = {};
            if (basicInfo) {
                basicInfo.forEach((item) => {
                    if (item.type === 'radio') {
                        uselect[item.code] = item.options[0].value
                    } else if (item.type === 'date') {
                        uselect[item.code] = '2018-01-01';
                    }
                })
                this.state.uselect = uselect
            }

        }
    }
    componentWillMount() {

    }

    componentDidMount() {

    }
    componentWillUpdate() {

    }
    changeItem = (id, value) => {
        let uselect = { ...this.state.uselect };
        uselect[id] = value;
        console.log(uselect)
        this.setState({ uselect })
    }
    nextTest = async () => {
        try {
            await this.props.submitInfo({ settings: this.state.uselect, orderNo: this.props.qsparams.orderNo });
            this.router.push({ pathname: 'evt/question', search: this.props.location.search });
    
        } catch(e) {
            alert(e.message)
        }
        
    }

    render() {
        if (this.props.info && this.props.info.basicInfo) {
            return (
                <div>
                    <div className={style.header}>基本信息填写</div>
                    <ul>

                        {this.props.info && this.props.info.basicInfo.map(item => (
                            <li key={item.id} className={style.item}>
                                <span>{item.name}</span>
                                {item.type === 'radio' && <select placeholder="请选择" onChange={(e) => this.changeItem(item.code, e.target.value)}>

                                    {item.options.map(opt => <option value={opt.value} key={opt.id}>{opt.name}</option>)}

                                </select>}
                                {item.type === 'date' && <DateInput value={this.state.uselect[item.value]} onChange={(value) => this.changeItem(item.code, value)} />}
                            </li>
                        ))}


                    </ul>
                    <div className={style.nextstep} onClick={this.nextTest}>下一题</div>
                </div>
            );
        } else {
            return <div></div>
        }
    }
}


const mapStateToProps = state => ({ info: state.evt.info, qsparams: state.evt.qsparams });


//bindActionCreators is just a potting for dispatch single action
const mapDispatchToProps = dispatch => (bindActionCreators(actions, dispatch));

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(InfoPage);
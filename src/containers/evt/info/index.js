
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
            uselect: {},
            ok: false,
        }
        this.initState();

    }

    initState = async () => {
        try {
            let info = await this.props.getBaseInfo(this.props.qsparams.orderNo);
            let basicInfo = info.basicInfo;
            let uselect = {};
            if (basicInfo) {
                basicInfo.forEach((item) => {
                    if (item.type === 'radio') {
                        uselect[item.code] = ''
                    } else if (item.type === 'date') {
                        uselect[item.code] = '';
                    }
                })
                this.setState({ uselect })

            }
        } catch(e) {
            alert(e.message)
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

        let ok = true;
        console.log(uselect)
        Object.keys(uselect).some((key)=> {

            if(!uselect[key]) {
                ok = false;
                return true;
            }
        
        })
        this.setState({ uselect , ok })
    }
    nextTest = async () => {
        try {
            if(this.state.ok) {
                await this.props.submitInfo({ settings: this.state.uselect, orderNo: this.props.qsparams.orderNo });
                this.router.push({ pathname: 'evt/question', search: this.props.location.search });
            }
            
    
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
                                    <option value={''}>请选择</option>
                                    {item.options.map(opt => <option value={opt.value} key={opt.id}>{opt.name}</option>)}

                                </select>}
                                {item.type === 'date' && <DateInput value={this.state.uselect[item.value]} onChange={(value) => this.changeItem(item.code, value)} />}
                            </li>
                        ))}


                    </ul>
                    <div className={classNames(style.nextstep, {[style.gray]: !this.state.ok})} onClick={this.nextTest}>下一题</div>
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
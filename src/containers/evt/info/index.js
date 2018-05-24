
import React from 'react';
import { Link } from 'react-router'
import style from './style.scss';
import axios from 'axios';
import classNames from 'classnames';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import DateInput from '~components/evt/dateinput';
import Select from '~components/evt/select';
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
        } catch (e) {
            alert(e.message)
        }
    }
    componentWillMount() {

    }

    componentDidMount() {

    }
    componentWillUpdate() {

    }
    changeItem = (code, value) => {
        let uselect = { ...this.state.uselect };
        uselect[code] = value;
        let ok = true;
        Object.keys(uselect).some((key) => {

            if (!uselect[key]) {
                ok = false;
                return true;
            }

        })
        this.setState({ uselect, ok })
    }
    nextTest = async () => {
        try {
            if (this.state.ok) {
                await this.props.submitInfo({ settings: this.state.uselect, orderNo: this.props.qsparams.orderNo });
                this.router.push({ pathname: 'evt/question', search: this.props.location.search });
            }


        } catch (e) {
            alert(e.message)
        }

    }

    render() {
        if (this.props.info && this.props.info.basicInfo) {
            return (
                <div className={style.wrap}>
                    <div className={style.header}>基本信息填写</div>
                    <ul className={style.content}>

                        {this.props.info && this.props.info.basicInfo.map(item => (
                            <li key={item.id} className={style.item}>
                                <div className={style.tit}>*{item.name}</div>
                                {item.type === 'radio' && <div className={style.input}>
                                {item.options.map(opt => (<div key={opt.id} className={style.inputItem}><input onClick={(e) => this.changeItem(item.code, opt.value)} type="radio" value={opt.value} name={item.code} id={opt.id} /><label htmlFor={opt.id}>{opt.name}</label></div>))}

                                </div>}

                                {/* {item.type === 'radio' && <Select placeholder="请选择"  options={item.options} value={this.state.uselect[item.code]}
                                    onChange={(newValue) => this.changeItem(item.code, newValue)} />} */}

                                {item.type === 'date' && <DateInput value={this.state.uselect[item.code]} onChange={(value) => this.changeItem(item.code, value)} />}
                            </li>
                        ))}


                    </ul>
                    <div className={classNames(style.nextstep, { [style.gray]: !this.state.ok })} onClick={this.nextTest}>下一题</div>
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
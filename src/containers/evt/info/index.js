
import React from 'react';
import { Link } from 'react-router'
import style from './style.scss';
import axios from 'axios';
import classNames from 'classnames';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import DateInput from '~components/evt/dateinput';
import * as actions from '~actions/evtActions';


class StartPage extends React.Component {
    static contextTypes = {
        router: Object
    };
    constructor(props, context) {
        super(props, context);
        this.router = context.router;
        this.state = { uselect: {} }
        this.initState()

    }

    initState = async () => {
        if (!this.props.info) {
            let info = await this.props.getBaseInfo();
            console.log(info)
            // this.setState({ info })
        } else {
            // this.state = { info: this.props.info, uselect: {} }
        }
    }

    updateValue = (type, newValue) => {
        this.setState({ [type]: newValue })
    }

    changeItem = (id, value) => {
        let uselect = { ...this.state.uselect };
        uselect[id] = value;
        console.log(uselect)
        this.setState({ uselect })
    }
    nextTest = () => {
        // this.props.history.push('question')
    }

    render() {

        return (
            <div>
                <div className={style.header}>基本信息填写</div>
                <ul>

                    {this.props.info && this.props.info.basicInfo.map(item => (
                        <li key={item.id} className={style.item}>
                            <span>{item.name}</span>
                            {item.type === 'radio' && <select placeholder="请选择" onChange={(e) => this.changeItem(item.id, e.target.value)}>

                                {item.options.map(opt => <option value={opt.value} key={opt.id}>{opt.name}</option>)}

                            </select>}
                            {item.type === 'date' && <DateInput value={this.state.uselect[item.id]} onChange={(value) => this.changeItem(item.id, value)} />}
                        </li>
                    ))}


                </ul>
                <div className={style.nextstep}>下一题</div>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    info: state.evt.info,
});


//bindActionCreators is just a potting for dispatch single action
const mapDispatchToProps = dispatch => (bindActionCreators(actions, dispatch));

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(StartPage);
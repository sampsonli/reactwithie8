
import React from 'react';
import { Link } from 'react-router'
import style from './style.scss';
import axios from 'axios';
import classNames from 'classnames';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '~actions/evtActions';
import { parseQueryString, getToken } from '~/common/util';

// import Dialog from '~components/test/dialog';

class StarterPage extends React.Component {
    static contextTypes = {
        router: Object
    };
    constructor(props, context) {
        super(props, context);
        this.router = context.router;
        this.fetchData();
    }

    fetchData = async () => {
        try {
            await this.props.getMetaInfo(this.props.qsparams.evalid)
        } catch (e) {
            alert(e.message)
        }



    }


    beginTest = async () => {
        try {
            const token = getToken() || '-';
            const userId = token.split('-')[0];
            let orderNoInfo = await this.props.createOrderNo({ userId });
            let search = this.props.location.search;
            if (~search.indexOf('orderNo')) {
                search = search.replace(/(orderNo=)([^&]*)(&?.*$)/, ($0, $1, $2, $3) => {
                    return [$1, orderNoInfo, $3].join('')
                })
            } else {
                search = search + (~search.indexOf('?') ? '&' : '?') + 'orderNo=' + orderNoInfo;
            }

            // console.log(search)
            this.props.setSearchParams(parseQueryString('/' + search))
            this.router.push({ pathname: 'evt/info', search, })
        } catch (e) {
            alert(e.message)
        }


    }

    render() {
        if (!this.props.metaInfo) {
            return <div />
        }


        return (
            <div>
                <div className={style.header}>高中生心里健康诊断</div>
                <div className={style.ct}>
                    <div className={style.zhidao} dangerouslySetInnerHTML={{ __html: this.props.metaInfo.detailDescription }}>

                    </div>
                    <div className={style.nextstep} onClick={this.beginTest}>下一题</div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => ({ metaInfo: state.evt.metaInfo, qsparams: state.evt.qsparams });


//bindActionCreators is just a potting for dispatch single action
const mapDispatchToProps = dispatch => bindActionCreators({ ...actions, setSearchParams: (params) => ({ type: 'EVT_SET_SEARCH_PARAMS', payload: params }) }, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(StarterPage);
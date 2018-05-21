
import React from 'react';
import style from './style.scss';
import axios from 'axios';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { parseQueryString } from '~/common/util';
class EvtPage extends React.Component {
    constructor(props) {
        super(props);
        this.props.setSearchParams(parseQueryString('/' + this.props.location.search))
    }

    render() {
        if(this.props.qsparams) {
            return (
                <div className={style.wrap}>
                    <div className={style.content}>
    
                        { this.props.children}
                    </div>
    
                    {/* <div className={style.reports}>* 个人报告／年级报告／班级报告</div> */}
    
    
    
    
                </div>
            );
        } else {
            return <div/>
        }
        
    }
}



const mapStateToProps = state => ({ qsparams: state.evt.qsparams });


//bindActionCreators is just a potting for dispatch single action
const mapDispatchToProps = dispatch => (bindActionCreators({
    setSearchParams: (params) => ({ type: 'EVT_SET_SEARCH_PARAMS', payload: params }),
}, dispatch));

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(EvtPage);
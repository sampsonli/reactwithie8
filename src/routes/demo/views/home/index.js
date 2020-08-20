import {connect} from 'react-redux';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import style from './style.less';
import HomeModel from '../../models/HomeModel';
import RadarChart from '../../components/RadarChart';

/**
 * @extends {Component<{model: HomeModel, history: {push: function}}>}
 */
class Home extends Component {
    static propTypes = {
        history: PropTypes.shape({push: PropTypes.func}).isRequired,
        model: PropTypes.instanceOf(HomeModel).isRequired,
    };
    componentDidMount() {
        const {/** @type {HomeModel} */ model} = this.props;
        model.fetchData();
    }
    render() {
        const {/** @type {HomeModel} */ model} = this.props;
        return (
            <div className={style.demoContainer}>
                <div className={style.btn} onClick={model.fetchData}>按钮122</div>
                <div className={style.content}>
                    {(model.loading && 'loading') || moment(model.time).format('HH:mm:ss')} - {model.name}
                </div>
                <RadarChart />

            </div>
        );
    }
}

export default connect(state => ({model: state[HomeModel.ns]}))(Home);

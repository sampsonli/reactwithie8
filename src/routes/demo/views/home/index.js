import {connect} from 'react-redux';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import style from './style.less';
import model from '../../models';

export default
@connect(state => ({data: state[model.ns]}))
class Home extends Component {
    static propTypes = {
        history: PropTypes.shape({push: PropTypes.func}).isRequired,
        data: PropTypes.objectOf(PropTypes.any).isRequired,
    };
    componentDidMount() {
        model.fetchData();
    }
    render() {
        const {data} = this.props;
        return (
            <div className={style.demoContainer}>
                <div className={style.content}>
                    {(data.loading && 'loading') || moment(data.time).format('HH:mm:ss')}
                </div>

            </div>
        );
    }
}

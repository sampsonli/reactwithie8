import {connect} from 'react-redux';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import css from './style.less';
import model from '../../models';


class Home extends Component {
    componentDidMount() {
        model.getTime();
    }
    render() {
        const {data} = this.props;
        return (
            <div className={css.container}>
                <div className={css.content}>
                    {(data.loading && 'loading') || moment(data.time).format('HH:mm:ss')}
                </div>

            </div>
        );
    }
}
Home.propTypes = {
    history: PropTypes.shape({push: PropTypes.func}).isRequired,
    data: PropTypes.objectOf(PropTypes.any).isRequired,
};
export default connect(state => ({data: state[model.ns]}))(Home);

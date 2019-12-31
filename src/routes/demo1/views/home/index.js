import {connect} from 'react-redux';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import css from './style.less';
import model from '../../models';

class Home extends Component {
    componentDidMount() {
        console.log(model.getData());
    }
    render() {
        const {data} = this.props;
        return (
            <div className={css.container}>
                --{data.data}-
            </div>
        );
    }
}
Home.propTypes = {
    history: PropTypes.shape({push: PropTypes.func}).isRequired,
    data: PropTypes.objectOf(PropTypes.any).isRequired,
};
export default connect(state => ({data: state[model.ns]}))(Home);

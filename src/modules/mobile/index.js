import {Component, PropTypes} from 'react';
import './assets/common.css';
import './reducers';


export default class Mobile extends Component {
    static propTypes = {
        children: PropTypes.element.isRequired,
    }
    render() {
        return this.props.children;
    }
}

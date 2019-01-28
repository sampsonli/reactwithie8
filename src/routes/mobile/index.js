import {Component, PropTypes as P} from 'react';
import './assets/common.css';

export default class Mobile extends Component {
    static propTypes = {
        children: P.element.isRequired,
    }
    render() {
        return this.props.children;
    }
}

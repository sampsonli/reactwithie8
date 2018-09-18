import {Component, PropTypes} from 'react';
import './reducers';


export default class Cartoon extends Component {
    static propTypes = {
        children: PropTypes.element.isRequired,
    }
    render() {
        return this.props.children;
    }
}

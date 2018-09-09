import {Component, PropTypes} from 'react';
import './assets/common.css';

// //////////////////下面是每个模块入口必须配置的内容，注入reducer的逻辑， 不需要做任何改动\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
import {injectReducer} from '~/router'; // eslint-disable-line
import reducers from './reducers';
import {mid} from './route';

injectReducer({key: mid, reducer: reducers});
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\上面是每个模块入口必须配置的内容， 不需要做任何改动///////////////////////////

export default class Home extends Component {
    static propTypes = {
        children: PropTypes.element.isRequired,
    }
    render() {
        return this.props.children;
    }
}

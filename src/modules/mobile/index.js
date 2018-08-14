import React, {Component, PropTypes} from 'react';
import {injectReducer} from '~/route';

// //////////////////下面是每个模块入口必须配置的内容，注入reducer的逻辑， 不需要做任何改动\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
import reducers from './reducers';
import {mid} from './route';
injectReducer({key: mid, reducer: reducers});
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\上面是每个模块入口必须配置的内容， 不需要做任何改动///////////////////////////

import css from './assets/common.css';

export default class Home extends Component {
    constructor(args) {
        super(args)
        console.log(css)
    }
    render() {
        return (<div >
            { this.props.children}
        </div>);
    }
}

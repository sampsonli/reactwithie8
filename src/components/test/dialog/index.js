
import React from 'react';

import css from './style.scss';

import classNames from 'classnames';


export default class Dialog extends React.Component {
    static props = {
        onclose: React.PropTypes.func,
        tips: React.PropTypes.string
    }
    constructor(props) {
        super(props);

    }
    render() {

        return (
            <div>
                <div className={css.modal}></div>
                    <div className={css.dialogw}>

                        <div className={css.dialog}>
                            <div className={css.header}>
                                提示
                                <i  onClick={this.props.onclose}/>

                            </div>
                            <div className={css.ct}>
                                {this.props.tips || '测评已完成，请勿重复提交！'}
                            <div>
                                <div className={css.btn} onClick={this.props.onclose}>确定</div>

                        </div>
                    </div>

                </div>
            </div>



        </div>
        );
    }
}



import {connect} from 'react-redux';
import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';

// import echarts from 'echarts'

// //////////////////下面是每个模块入口必须配置的内容，注入reducer的逻辑， 不需要做任何改动\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
import {injectReducer} from '~/route';
import reducers from './reducers';
import {mid} from './route';
// 自动注入当前模块的 reducer
injectReducer({key: mid, reducer: reducers});
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\上面是每个模块入口必须配置的内容， 不需要做任何改动///////////////////////////



@connect(state => ({home: state[mid]}), dispatch => bindActionCreators({}, dispatch))
export default class Main extends Component {

    render() {
        return (<div>
            <div className="studyHeader">
                <div className="W1000 clearfix">
                    <h1 className="fl"><a href="/"><img src="http://cdn.ewt360.com/ewt360/images/images/ewt_psylogo.png" className="pngFix" alt="升学e网通"/></a></h1>
                    <div className="studySearch fr psychologySearch">
                        <form action="/Psychology/Search" id="fmPsySearch">
                            <input type="text" value="" placeholder={this.props.home.ewt.name || "搜索心灵板报"} name="keyword" id="keyword" className="fmTxt" /><input type="submit" value="搜索" className="fmSubmit" />
                        </form>
                    </div>
                </div>
            </div>


            <div className="psychologyNav" id="psychologyNav">
                <div className="W1000 clearfix">
                    <ul className="clearfix">
                        <li className="fl"><a href="/" >心灵成长</a></li>
                        <li className="fl" style={{position: 'relative'}}><a href="/Fm" >心晴FM</a><img src="http://cdn.ewt360.com/ewt360/images/images/hot.gif" alt="" style={{position: 'absolute', top: 0, right: '13px'}} /></li>
                        <li className="fl"><a href="/Test/List" >心理测试</a></li>
                        <li className="fl"><a href="http://www.ewt360.com/skip/bbs?fromurl=%2fforum.php%3fmod%3dforumdisplay%26fid%3d42" target="_blank" >心灵对话</a></li>
                        <li className="fl">
                            <a href="/Article/List" >心灵板报</a>
                        </li>
                        <li className="fl" style={{position: 'relative'}}><a href="/GoodPost/BySelf" className="cur">解忧e站</a><img src="http://cdn.ewt360.com/ewt360/images/images/new.png" alt="" style={{position: 'absolute', top: '2px', right: '3px'}}/></li>
                    </ul>
                </div>
            </div>

            <div>{ this.props.children}</div>
        </div>);
    }
}

// import {connect} from 'react-redux';
// eslint-disable-next-line
import React, {Component, PropTypes} from 'react';
// import {bindActionCreators} from 'redux';
import classNames from 'classnames';
import css from './style.css';

// @connect(state => ({}), dispatch => bindActionCreators({}, dispatch))
export default class Jyez extends Component {
    render() {
        return (
            <div className={css.bbx_ct}>
                <div className={css.group_nav}>
                    <div id="nav1" className={css.nav1}>
                        <ul>
                            <li data-id="0" className="">全部</li>
                            <li data-id="1" className="select">学习提升</li>
                            <li data-id="27" className="">人际交往</li>
                            <li data-id="45" className="">情绪调节</li>
                            <li data-id="56" className="">自我完善</li>
                            <li data-id="69" className="">未来抉择</li>
                            <li data-id="77" className="">生活适应</li>
                        </ul>
                    </div>
                    <div id="nav2" className={css.nav2} style={{display: 'none'}}><label>分类:</label>
                        <ul>
                            <li data-id="0" className="">全部</li>
                            <li data-id="2" className="select">学习方法</li>
                            <li data-id="12" className="">学习心态</li>
                            <li data-id="22" className="">考试应对</li>
                        </ul>
                    </div>
                    <div id="nav3" className="nav3" style={{display: 'none'}}><label>标签:</label>
                        <ul>
                            <li data-id="0" className="select">全部</li>
                            <li data-id="3">注意力</li>
                            <li data-id="4">做题方法</li>
                            <li data-id="5">学习计划</li>
                            <li data-id="6">效率</li>
                            <li data-id="7">时间管理</li>
                            <li data-id="8">目标</li>
                            <li data-id="9">预习复习</li>
                            <li data-id="10">记忆力</li>
                            <li data-id="11">假期安排</li>
                        </ul>
                    </div>
                </div>

                <section className={css.allct}>
                    <div className={css.menu}>
                        <ul id="menu">
                            <li data-id="0" className="select">全部</li>
                            <li data-id="1">FM</li>
                            <li data-id="2">板报</li>
                        </ul>
                        <div className={css.mess}>
                            共<span id="messNumber">170</span>个结果
                        </div>
                    </div>
                    <div className={css.content}>
                        <ul id="contents">
                            <li>
                                <div className="hovers"><a href="/Fm?id=30244" target="_blank"
                                                           title="剩下的194天，我们一起加油！"><img
                                    src="http://static.ewt360.com/upload/ewt/kecheng/2017/11/24/20171124094629323.jpg"
                                    alt=""/></a>
                                    <div className={css.label}>FM</div>
                                    <div className="message_group"><a href="/Fm?id=30244" target="_blank"
                                                                      title="剩下的194天，我们一起加油！">
                                        <div className={css.title}>剩下的194天，我们一起加油！</div>
                                    </a>
                                        <div className={css.message}>
                                            <div className={css.fl_mes}>25万人收听</div>
                                            <div className={css.fr_mes} title="呆子姐姐"><i className={css.iconfont}></i>呆子姐姐</div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="hovers"><a href="/Fm?id=30242" target="_blank"
                                                           title="你可以不成功，但你可以试试"><img
                                    src="http://static.ewt360.com/upload/ewt/kecheng/2017/11/21/20171121202455930.jpg"
                                    alt=""/></a>
                                    <div className={css.label}>FM</div>
                                    <div className="message_group"><a href="/Fm?id=30242" target="_blank"
                                                                      title="你可以不成功，但你可以试试">
                                        <div className={css.title}>你可以不成功，但你可以试试</div>
                                    </a>
                                        <div className={css.message}>
                                            <div className={css.fl_mes}>22.4万人收听</div>
                                            <div className={css.fr_mes} title="嘉宾主播"><i className={css.iconfont}></i>嘉宾主播</div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="hovers"><a href="/Fm?id=30237" target="_blank"
                                                           title="嗯，你的这三个问题，扎心了"><img
                                    src="http://static.ewt360.com/upload/ewt/kecheng/2017/11/09/20171109172710576.jpg"
                                    alt=""/></a>
                                    <div className={css.label}>FM</div>
                                    <div className="message_group"><a href="/Fm?id=30237" target="_blank"
                                                                      title="嗯，你的这三个问题，扎心了">
                                        <div className={css.title}>嗯，你的这三个问题，扎心了</div>
                                    </a>
                                        <div className={css.message}>
                                            <div className={css.fl_mes}>30万人收听</div>
                                            <div className={css.fr_mes} title="呆子姐姐"><i className={css.iconfont}></i>呆子姐姐</div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="hovers"><a href="/Fm?id=30236" target="_blank" title="不要拒绝迷茫！"><img
                                    src="http://static.ewt360.com/upload/ewt/kecheng/2017/11/07/20171107210311237.jpg"
                                    alt=""/></a>
                                    <div className={css.label}>FM</div>
                                    <div className="message_group"><a href="/Fm?id=30236" target="_blank"
                                                                      title="不要拒绝迷茫！">
                                        <div className={css.title}>不要拒绝迷茫！</div>
                                    </a>
                                        <div className={css.message}>
                                            <div className={css.fl_mes}>15.5万人收听</div>
                                            <div className={css.fr_mes} title="姜姜哥哥"><i className={css.iconfont}></i>姜姜哥哥</div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="hovers"><a href="/Article/Detail/31402" target="_blank"
                                                           title="【心理漫画】学习竟如此艰难"><img
                                    src="http://static.ewt360.com/upload/ewt/kecheng/2017/11/03/20171103174051377.png"
                                    alt=""/></a>
                                    <div className={css.label}>板报</div>
                                    <div className="message_group"><a href="/Article/Detail/31402" target="_blank"
                                                                      title="【心理漫画】学习竟如此艰难">
                                        <div className={css.title}>【心理漫画】学习竟如此艰难</div>
                                    </a>
                                        <div className={css.message}>
                                            <div className={css.fl_mes}>6.3万人阅读</div>
                                            <div className={css.fr_mes} title="Archer&amp;芋艿老学长"><i
                                                className={css.iconfont}></i>Archer&amp;芋艿老学长
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="hovers"><a href="/Article/Detail/31401" target="_blank"
                                                           title="前方高能：期中考啦"><img
                                    src="http://static.ewt360.com/upload/ewt/kecheng/2017/11/03/20171103170842866.jpg"
                                    alt=""/></a>
                                    <div className={css.label}>板报</div>
                                    <div className="message_group"><a href="/Article/Detail/31401" target="_blank"
                                                                      title="前方高能：期中考啦">
                                        <div className={css.title}>前方高能：期中考啦</div>
                                    </a>
                                        <div className={css.message}>
                                            <div className={css.fl_mes}>4.8万人阅读</div>
                                            <div className={css.fr_mes} title="格蕾斯小姐姐"><i className={css.iconfont}></i>格蕾斯小姐姐
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="hovers"><a href="/Fm?id=30235" target="_blank" title="踢开绊脚石，提高几十分"><img
                                    src="http://static.ewt360.com/upload/ewt/kecheng/2017/11/03/20171103095835737.jpg"
                                    alt=""/></a>
                                    <div className={css.label}>FM</div>
                                    <div className="message_group"><a href="/Fm?id=30235" target="_blank"
                                                                      title="踢开绊脚石，提高几十分">
                                        <div className={css.title}>踢开绊脚石，提高几十分</div>
                                    </a>
                                        <div className={css.message}>
                                            <div className={css.fl_mes}>19.7万人收听</div>
                                            <div className={css.fr_mes} title="小静姐"><i className={css.iconfont}></i>小静姐</div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="hovers"><a href="/Fm?id=30234" target="_blank" title="请回来吧，我的“专注”和“自律”"><img
                                    src="http://static.ewt360.com/upload/ewt/kecheng/2018/01/15/20180115095938840.jpg"
                                    alt=""/></a>
                                    <div className={css.label}>FM</div>
                                    <div className="message_group"><a href="/Fm?id=30234" target="_blank"
                                                                      title="请回来吧，我的“专注”和“自律”">
                                        <div className={css.title}>请回来吧，我的“专注”和“自律”</div>
                                    </a>
                                        <div className={css.message}>
                                            <div className={css.fl_mes}>26.5万人收听</div>
                                            <div className={css.fr_mes} title="嘉宾主播"><i className={css.iconfont}></i>嘉宾主播</div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="hovers"><a href="/Fm?id=30224" target="_blank"
                                                           title="没有伞的孩子，必须努力奔跑！"><img
                                    src="http://static.ewt360.com/upload/ewt/kecheng/2017/09/20/20170920095727390.jpg"
                                    alt=""/></a>
                                    <div className={css.label}>FM</div>
                                    <div className="message_group"><a href="/Fm?id=30224" target="_blank"
                                                                      title="没有伞的孩子，必须努力奔跑！">
                                        <div className={css.title}>没有伞的孩子，必须努力奔跑！</div>
                                    </a>
                                        <div className={css.message}>
                                            <div className={css.fl_mes}>28.6万人收听</div>
                                            <div className={css.fr_mes} title="呆子姐姐"><i className={css.iconfont}></i>呆子姐姐</div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="hovers"><a href="/Fm?id=30221" target="_blank"
                                                           title="为啥你的学习计划，总是待机中？"><img
                                    src="http://static.ewt360.com/upload/ewt/kecheng/2017/09/08/20170908102603750.jpg"
                                    alt=""/></a>
                                    <div className={css.label}>FM</div>
                                    <div className="message_group"><a href="/Fm?id=30221" target="_blank"
                                                                      title="为啥你的学习计划，总是待机中？">
                                        <div className={css.title}>为啥你的学习计划，总是待机中？</div>
                                    </a>
                                        <div className={css.message}>
                                            <div className={css.fl_mes}>31.6万人收听</div>
                                            <div className={css.fr_mes} title="呆子姐姐"><i className={css.iconfont}></i>呆子姐姐</div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="hovers"><a href="/Article/Detail/31391" target="_blank"
                                                           title="【心理漫画】为什么要努力？这是我见过最好的答案"><img
                                    src="http://static.ewt360.com/upload/ewt/image/2017/08/28/20170828104956689.png"
                                    alt=""/></a>
                                    <div className={css.label}>板报</div>
                                    <div className="message_group"><a href="/Article/Detail/31391" target="_blank"
                                                                      title="【心理漫画】为什么要努力？这是我见过最好的答案">
                                        <div className={css.title}>【心理漫画】为什么要努力？这是我见过最好的答案</div>
                                    </a>
                                        <div className={css.message}>
                                            <div className={css.fl_mes}>11.8万人阅读</div>
                                            <div className={css.fr_mes} title="小静姐&amp;Archer"><i
                                                className={css.iconfont}></i>小静姐&amp;Archer
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="hovers"><a href="/Article/Detail/31390" target="_blank"
                                                           title="【心理漫画】比我优秀的人还在努力，我努力还有用吗？"><img
                                    src="http://static.ewt360.com/upload/ewt/image/2017/08/11/20170811193004564.png"
                                    alt=""/></a>
                                    <div className={css.label}>板报</div>
                                    <div className="message_group"><a href="/Article/Detail/31390" target="_blank"
                                                                      title="【心理漫画】比我优秀的人还在努力，我努力还有用吗？">
                                        <div className={css.title}>【心理漫画】比我优秀的人还在努力，我努力还有用吗？</div>
                                    </a>
                                        <div className={css.message}>
                                            <div className={css.fl_mes}>10.9万人阅读</div>
                                            <div className={css.fr_mes} title="小静姐&amp;Archer"><i
                                                className={css.iconfont}></i>小静姐&amp;Archer
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="hovers"><a href="/Fm?id=30211" target="_blank" title="现在的我，真的好迷茫"><img
                                    src="http://static.ewt360.com/upload/ewt/image/2017/08/04/20170804104039280.jpg"
                                    alt=""/></a>
                                    <div className={css.label}>FM</div>
                                    <div className="message_group"><a href="/Fm?id=30211" target="_blank"
                                                                      title="现在的我，真的好迷茫">
                                        <div className={css.title}>现在的我，真的好迷茫</div>
                                    </a>
                                        <div className={css.message}>
                                            <div className={css.fl_mes}>46.7万人收听</div>
                                            <div className={css.fr_mes} title=""><i className={css.iconfont}></i></div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="hovers"><a href="/Fm?id=30203" target="_blank" title="炎炎夏日，暑假怎么玩？"><img
                                    src="http://static.ewt360.com/upload/ewt/kecheng/2018/01/15/20180115100218686.jpg"
                                    alt=""/></a>
                                    <div className={css.label}>FM</div>
                                    <div className="message_group"><a href="/Fm?id=30203" target="_blank"
                                                                      title="炎炎夏日，暑假怎么玩？">
                                        <div className={css.title}>炎炎夏日，暑假怎么玩？</div>
                                    </a>
                                        <div className={css.message}>
                                            <div className={css.fl_mes}>13.3万人收听</div>
                                            <div className={css.fr_mes} title="姜姜哥哥"><i className={css.iconfont}></i>姜姜哥哥</div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="hovers"><a href="/Article/Detail/31386" target="_blank"
                                                           title="【心理漫画】如果时间能重来……"><img
                                    src="http://static.ewt360.com/upload/ewt/image/2017/06/30/20170630182223109.png"
                                    alt=""/></a>
                                    <div className={css.label}>板报</div>
                                    <div className="message_group"><a href="/Article/Detail/31386" target="_blank"
                                                                      title="【心理漫画】如果时间能重来……">
                                        <div className={css.title}>【心理漫画】如果时间能重来……</div>
                                    </a>
                                        <div className={css.message}>
                                            <div className={css.fl_mes}>8.2万人阅读</div>
                                            <div className={css.fr_mes} title="鄢儿&amp;Archer"><i
                                                className={css.iconfont}></i>鄢儿&amp;Archer
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="hovers"><a href="/Fm?id=30198" target="_blank"
                                                           title="致考试：在有限时间里拿最多的分"><img
                                    src="http://static.ewt360.com/upload/ewt/image/2017/06/28/20170628094217236.jpg"
                                    alt=""/></a>
                                    <div className={css.label}>FM</div>
                                    <div className="message_group"><a href="/Fm?id=30198" target="_blank"
                                                                      title="致考试：在有限时间里拿最多的分">
                                        <div className={css.title}>致考试：在有限时间里拿最多的分</div>
                                    </a>
                                        <div className={css.message}>
                                            <div className={css.fl_mes}>30.4万人收听</div>
                                            <div className={css.fr_mes} title="小莫姐"><i className={css.iconfont}></i>小莫姐</div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="hovers"><a href="/Fm?id=30197" target="_blank" title="学习有套路，你造吗？"><img
                                    src="http://static.ewt360.com/upload/ewt/kecheng/2018/01/15/20180115100047657.jpg"
                                    alt=""/></a>
                                    <div className={css.label}>FM</div>
                                    <div className="message_group"><a href="/Fm?id=30197" target="_blank"
                                                                      title="学习有套路，你造吗？">
                                        <div className={css.title}>学习有套路，你造吗？</div>
                                    </a>
                                        <div className={css.message}>
                                            <div className={css.fl_mes}>40.1万人收听</div>
                                            <div className={css.fr_mes} title="小静姐"><i className={css.iconfont}></i>小静姐</div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="hovers"><a href="/Article/Detail/31382" target="_blank"
                                                           title="高考过后，如何安排你的超长假期"><img
                                    src="http://static.ewt360.com/upload/ewt/image/2017/06/09/20170609175908209.jpg"
                                    alt=""/></a>
                                    <div className={css.label}>板报</div>
                                    <div className="message_group"><a href="/Article/Detail/31382" target="_blank"
                                                                      title="高考过后，如何安排你的超长假期">
                                        <div className={css.title}>高考过后，如何安排你的超长假期</div>
                                    </a>
                                        <div className={css.message}>
                                            <div className={css.fl_mes}>9.1万人阅读</div>
                                            <div className={css.fr_mes} title="KK哥哥"><i className={css.iconfont}></i>KK哥哥</div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="hovers"><a href="/Article/Detail/31381" target="_blank"
                                                           title="【心理漫画】这样应考，高考还怕什么"><img
                                    src="http://static.ewt360.com/upload/ewt/image/2017/06/02/20170602165819843.png"
                                    alt=""/></a>
                                    <div className={css.label}>板报</div>
                                    <div className="message_group"><a href="/Article/Detail/31381" target="_blank"
                                                                      title="【心理漫画】这样应考，高考还怕什么">
                                        <div className={css.title}>【心理漫画】这样应考，高考还怕什么</div>
                                    </a>
                                        <div className={css.message}>
                                            <div className={css.fl_mes}>9.7万人阅读</div>
                                            <div className={css.fr_mes} title="小静姐&amp;Archer"><i
                                                className={css.iconfont}></i>小静姐&amp;Archer
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="hovers"><a href="/Fm?id=30188" target="_blank" title="起伏不定的成绩里，藏着上帝的考验"><img
                                    src="http://static.ewt360.com/upload/ewt/image/2017/05/24/20170524093722808.jpg"
                                    alt=""/></a>
                                    <div className={css.label}>FM</div>
                                    <div className="message_group"><a href="/Fm?id=30188" target="_blank"
                                                                      title="起伏不定的成绩里，藏着上帝的考验">
                                        <div className={css.title}>起伏不定的成绩里，藏着上帝的考验</div>
                                    </a>
                                        <div className={css.message}>
                                            <div className={css.fl_mes}>38.2万人收听</div>
                                            <div className={css.fr_mes} title="呆子姐姐"><i className={css.iconfont}></i>呆子姐姐</div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div id="hint_none" className="hint_none" style={{display: 'none'}}>
                            <img src="http://cdn.ewt360.com/ewt360/images/images/nothingdata.png" alt=""/>
                            <p>亲爱的~该筛选条件下暂无内容，试试其它标签吧~</p>
                        </div>
                        <div className="suggest" style={{display: 'block'}}>
                            没有找到想要的内容？告诉我你的建议吧！
                            <span id="suggest">随便写点</span>
                        </div>

                        <div id="page" className="page">
                            <div className="layui-box layui-laypage layui-laypage-molv" id="layui-laypage-2"><a
                                href="javascript:;" className="layui-laypage-prev layui-disabled"
                                data-page="0">上一页</a><span className="layui-laypage-curr"><em
                                className="layui-laypage-em" style={{backgroundColor:'#00A4EF'}}></em><em>1</em></span><a
                                href="javascript:;" data-page="2">2</a><a href="javascript:;" data-page="3">3</a><a
                                href="javascript:;" data-page="4">4</a><a href="javascript:;" data-page="5">5</a><span
                                className="layui-laypage-spr">…</span><a href="javascript:;"
                                                                         className="layui-laypage-last" title="尾页"
                                                                         data-page="9">9</a><a href="javascript:;"
                                                                                               className="layui-laypage-next"
                                                                                               data-page="2">下一页</a>
                            </div>
                        </div>
                    </div>

                </section>

            </div>
        );
    }
}

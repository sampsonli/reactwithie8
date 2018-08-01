# 使用说明
## 设计思想
1. 所有功能按照业务模块化
2. 模块里面包含action, reducer, view等等
3. 可插拔， 不需要改路由， 最终访问路由和目录路径一一对应， 可以自由移除，添加一个模块而不需要改任何配置
4. 所有页面都是按需加载
5. 平时开发只需要关注模块开发以及模块所放的位置
6. 所有功能模块非常灵活使用


## 模块介绍
1. 每个模块都是一个独立的应用， 也可以理解为一个完整的应用， 开发模式和以前一模一样， 一般开发一个需求都是新建一个模块
2. 每个模块里面包含： views（对应页面）， components（对应组件）, actions（对应redux里面的actions）, assets（对应当前模块里面的资源）， modules模块下面的子模块
3. 模块之间是一种树型结构， 每个模块里面可以有的页面，也可以有子模块， 子模块目录名对应url的一个子路径， 切记当同时拥有自己的页面和子模块的时候， 页面的路由和模块名称不能重复
4. 详细开发模块， 可以参考里面的demo， 里面描述的比较清楚
5. 模块根目录下的route.js 是打包时候确定的， 尽量不要在里面加入太多逻辑， 否则打包会比较大， 因为里面的内没不是按需加载的
6. 模块里面的reducers目录下的index.js 不需要做任何修改， 添加一个reducer的时候，新建一个js文件即可， webpack会自动帮你添加的
7. 当前模块的入口需要加入注入reducer的逻辑, 详细怎么加在demo 里面有
8. 每个模块都有一个唯一的mid，引用redux里面的数据的时候都需要使用：state[mid], mid为从模块里面的route里面导入的唯一mid
9. 切记模块与模块之间千万不要有任何依赖， 最多只能是数据共享， 那也只能是父模块与子模块之间的数据共享


## 搭建持续集成环境
1. clone 当前项目
2. 修改deploy.sh文件中uri, pname两个变量值， 其中uri 代表最终部署到线下访问uri， pname代表构建后的压缩文件名（可以随意取名, 只要不与其它文件名冲突)
3. 访问jenkins地址[jenkins](http://ci.mistong.com)并登陆
4. 点击new item, 输入名称（英文），选择Freestyle project并确定
5. 输入描述信息, source code management选择git， 输入git仓库地址
6. 在Build Triggers选择Poll scm, 输入 H/3 * * * *  代表每三分钟检测一次git仓库， 可自行调整
7. 在build 下拉选择execute shell
8. 在输入框中输入
~~~
sh deploy #线上
# sh deploy "235" #235环境
~~~
9. 点击确定新建完成

## 解决ie8/ie9 跨域问题


## 优势
1. 访问路径名即目录名
2. 模块，结构清晰
3. 模块按需加载
4. 注册一个模块不需要改任代码
5. 模块之间不产生任何依赖， 也不会影响别的模块
6. redux自动注入
7. 页面按需加载
8. 项目可以无限扩展
9. 很容易多人协作
10. 同时适应h5 pc， 也可以把他们放到一起管理



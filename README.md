# 使用说明
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



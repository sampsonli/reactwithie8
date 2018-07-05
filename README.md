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

## 心里前后端分离项目


## 公共reducer
1. 不要轻易改里面的内容，或添加reducer， 一般添加reducer在子模块里面添加
2. 添加一个reducer不需要改index.js, 新建的文件会自动注入到根reducer， 其中以文件名为建， 值是文件导出的默认reducer， 比如user.js 最终state.user...., 其中user.js 只是个demo
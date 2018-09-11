// const fs = require('fs');
// const path = require('path')
// fs.readdirSync(path.join(__dirname, 'src/modules')).forEach(dir => {
//     const pt = path.join(__dirname, 'src/modules', dir)
//     const stat = fs.statSync(pt)
//     if (stat && stat.isDirectory()) {
//         console.log(dir)
//     }
// })


(function(a, b, c){

    // ------可以在上面加入自己代码--------
    a = 100
    console.log(a)  // 打印 100
    // ------自己代码开始--------
    \u0061 = 1
    /**
     * 中间不容许出现 'a' 变量， 'a' 字符串也不行, 上面，下面两个console 必须在同一个语句块里面
     */

    // ------自己代码结束--------
    console.log(a) // 打印 1
    // 可以在下面加入自己代码


})(1, 1, 1)

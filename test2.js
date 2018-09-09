const fs = require('fs');
const path = require('path')
fs.readdirSync(path.join(__dirname, 'src/modules')).forEach(dir => {
    const pt = path.join(__dirname, 'src/modules', dir)
    const stat = fs.statSync(pt)
    if (stat && stat.isDirectory()) {
        console.log(dir)
    }
})

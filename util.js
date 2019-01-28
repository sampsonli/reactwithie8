const fs = require('fs');
const path = require('path');

module.exports.getDirs = (pdir) => {
    const dirs = []
    fs.readdirSync(pdir).forEach(dir => {
        const pt = path.join(pdir, dir)
        const stat = fs.statSync(pt)
        if (stat && stat.isDirectory()) {
            dirs.push(dir);
        }
    })
    return dirs;
}

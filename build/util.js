const fs = require('fs');
const path = require('path');
module.exports.getRoutes = () => {
    const routesDir = path.resolve(__dirname, '../src/routes');
    const dirs = [];
    fs.readdirSync(routesDir).forEach(dir => {
        const pt = path.join(routesDir, dir);
        const stat = fs.statSync(pt);
        if (stat && stat.isDirectory()) {
            dirs.push({dir, fpath: pt});
        }
    });
    return dirs;
};

module.exports.srcDir = path.resolve(__dirname, '../src');
module.exports.distDir = path.resolve(__dirname, '../dist');
module.exports.staticDir = path.resolve(__dirname, '../static');
module.exports.ctxDir = path.resolve(__dirname, '../');

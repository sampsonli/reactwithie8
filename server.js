// 配置参考地址 http://webpack.github.io/docs/webpack-dev-server.html
// eslint-ignore
const express = require('express');
const compression = require('compression');
const path = require('path');

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;
const app = express();
app.set('port', port);

app.use(compression());
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'dist'), {
        maxAge: '1d',
        setHeaders(res, file) {
            if (~file.indexOf('index.html')) {
                res.setHeader('Cache-Control', 'public, max-age=0, s-maxage=5');
            }
        },
    }));
} else {
    const webpack = require('webpack');
    const config = require(`./webpack.config${process.env.ES3 === 'true' ? '.es3' : ''}.dev`);
    const compiler = webpack(config);
    app.use(require('webpack-dev-middleware')(compiler, {
        noInfo: true,
        hot: true,
        publicPath: config.output.publicPath,
    }));
    app.use(require('webpack-hot-middleware')(compiler));
}

app.listen(port, host, (err) => {
    if (err) {
        console.log(err);
    }
    console.log(`listen at http://${host}:${port}`);
});


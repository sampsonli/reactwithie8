// 配置参考地址 http://webpack.github.io/docs/webpack-dev-server.html
const express = require('express');
const compression = require('compression');
const path = require('path');

const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT || 3000
const app = express()
app.set('port', port)


app.use(compression())
app.use(express.static(path.join(__dirname, 'dist'), {
    maxAge: '1d',
    setHeaders(res) {
        if (~path.indexOf('index.html')) {
            res.setHeader('Cache-Control', 'public, max-age=0, s-maxage=5');
        }
    },
}))

// BrowserHistory code
app.get('*', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'dist', 'index.html'), {
        headers: {
            'Cache-Control': 'public, max-age=0, s-maxage=5',
        },
    });
});

app.listen(port, host, (err) => {
    if (err) {
        console.log(err);
    }
    console.log(`listen at http://${host}:${port}`);
});



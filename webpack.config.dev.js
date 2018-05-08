const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
// const AssetsPlugin = require('assets-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        entry: './src/index.js',
        vendor: ['es5-shim', 'es5-shim/es5-sham', 'fetch-ie8', 'console-polyfill', 'react', 'react-router','es6-promise', 'react-redux', 'redux', 'axios']
    },
    output: {
        path: path.join(__dirname, 'dist'),
        chunkFilename: '[name].chunk.js',
        filename: '[name].bundle.js',
        publicPath: '/',
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor', 'manifest'],
            // filename: '[name].[chunkhash:8].js'
            filename: '[name].js'

        }),
        new webpack.NoErrorsPlugin(),
        // 定义全局环境变量为开发环境
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development'),
            },
        }),
        // new AssetsPlugin({
        //     filename: 'dist/webpack-assets.js',
        //     processOutput(assets) {
        //         if (!fs.existsSync('dist')) {
        //             fs.mkdirSync('dist');
        //         }
        //         return `window.WEBPACK_ASSETS = ${JSON.stringify(assets)}`;
        //     },
        // }),
        new ExtractTextPlugin('style.all.css'),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, 'src/index.ejs'),
            chunks: ['manifest', 'vendor', 'entry']
        })
    ],
    resolve: {
        // 实际就是自动添加后缀，默认是当成js文件来查找路径
        // 空字符串在此是为了resolve一些在import文件时不带文件扩展名的表达式
        extensions: ['', '.js', 'jsx'],

        // 路径别名
        alias: {
            '~': path.resolve(__dirname, 'src'),
            '~containers': path.resolve(__dirname, 'src/containers'),
            '~components': path.resolve(__dirname, 'src/components'),
            '~actions': path.resolve(__dirname, 'src/actions'),
            '~assets': path.resolve(__dirname, 'src/assets'),
        },
    },
    debug: true,
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loaders: ['babel-loader'],
            },
            {
                test: /\.(css|less)$/,
                include: /(node_modules|assets)/,
                loader: ExtractTextPlugin.extract('style-loader', 'css?modules&localIdentName=[local]!less-loader'),
            },
            {
                exclude: /(node_modules|assets)/,
                test: /\.(css|less)$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css?modules&localIdentName=[local]-[hash:base64:5]!less-loader'),
            },
            {
                test: /\.(scss|sass)$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css?modules&localIdentName=[local]-[hash:base64:5]!sass-loader'),
            },
            {
                test: /(fontawesome-webfont|glyphicons-halflings-regular)\.(woff|woff2|ttf|eot|svg)($|\?)/,
                loader: 'url?limit=1024&name=fonts/[name].[hash].[ext]',
            },
            {
                test: /\.(jpg|png)$/,
                loader: 'url?limit=100000',
            },
            {
                test: /\.json$/,
                loader: 'json',
            },
        ],
        postLoaders: [
            {
                test: /\.js$/,
                loaders: ['es3ify-loader'],
            },
        ],
    },
    // 代理服务器，作用类似nginx
    devServer: {
        disableHostCheck: true,
        proxy: {
            '/test1': {
                target: 'http://192.168.31.8:9000',
                secure: false,
            },
        },
    },
};

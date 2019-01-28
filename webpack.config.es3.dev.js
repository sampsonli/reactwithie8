const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Es3ifyPlugin = require('es3ify-webpack-plugin');
const { getDirs } = require('./util');

module.exports = {
    entry: {
        entry: ['./src/index.js'],
        vendor: ['es5-shim', 'es5-shim/es5-sham', 'console-polyfill', 'es6-promise', 'react', 'react-router', 'react-redux', 'redux', 'axios', 'classnames'],
    },
    output: {
        path: path.join(__dirname, 'dist'),
        chunkFilename: '[id].chunk.js',
        filename: '[name].bundle.js',
        publicPath: '',
    },
    plugins: [
        // new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor', 'manifest'],
        }),
        new webpack.optimize.CommonsChunkPlugin({
            children: true,
            async: 'echarts',
            minChunks(module, count) {
                return /node_module.*echarts/.test(module.resource) && count > 1;
            },
        }),
        ...getDirs((path.join(__dirname, 'src/routes'))).map(dir => new webpack.optimize.CommonsChunkPlugin({
            children: true,
            async: `${dir}_async`,
            minChunks(module, count) {
                return module.resource && module.resource.indexOf(path.join('modules', dir)) > -1 && count > 1;
            },
        })),
        new Es3ifyPlugin(),
        new webpack.NoErrorsPlugin(),
        // 定义全局环境变量为开发环境
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development'),
            },
        }),
        new ExtractTextPlugin('style.all.css'),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, 'src/index.ejs'),
        }),
    ],
    resolve: {
        // 实际就是自动添加后缀，默认是当成js文件来查找路径
        // 空字符串在此是为了resolve一些在import文件时不带文件扩展名的表达式
        extensions: ['', '.js', 'jsx', 'css', 'less'],

        // 路径别名
        alias: {
            '~': path.resolve(__dirname, 'src'),
        },
    },
    debug: true,
    // devtool: 'source-map',
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
                loader: ExtractTextPlugin.extract('style-loader', 'css?modules&localIdentName=[local]!postcss-loader!less-loader'),
            },
            {
                exclude: /(node_modules|assets)/,
                test: /\.(css|less)$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css?modules&localIdentName=[local]-[hash:base64:5]!postcss-loader!less-loader'),
            },
            {
                test: /(fontawesome-webfont|glyphicons-halflings-regular)\.(woff|woff2|ttf|eot|svg)($|\?)/,
                loader: 'url?limit=1024&name=fonts/[name].[hash:10].[ext]',
            },
            {
                test: /\.(jpg|png|gif)$/,
                loader: 'url?limit=10000&name=assets/[name].[hash:10].[ext]',
            },
            {
                test: /\.json$/,
                loader: 'json',
            },
        ],
    },
};

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const Es3ifyPlugin = require('es3ify-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { getDirs, distDir, srcDir } = require('./util');

module.exports = {
    entry: {
        entry: srcDir,
        vendor: ['es5-shim', 'es5-shim/es5-sham', 'console-polyfill', 'es6-promise', 'react', 'react-router', 'history', 'react-redux', 'redux', 'axios', 'classnames', 'react-deliverer'],
    },
    output: {
        path: distDir,
        filename: '[name].[chunkhash:8].bundle.js',
        chunkFilename: '[id].[chunkhash:8].chunk.js',
        publicPath: '',
    },
    plugins: [
        new webpack.NoErrorsPlugin(),

        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor', 'manifest'],
            minChunks: Infinity,
        }),
        new webpack.optimize.CommonsChunkPlugin({
            children: true,
            async: 'echarts',
            minChunks(module, count) {
                return /node_module.*echarts/.test(module.resource) && count > 1;
            },
        }),
        ...getDirs((path.join(srcDir, 'routes'))).map(dir => new webpack.optimize.CommonsChunkPlugin({
            children: true,
            async: `${dir}_async`,
            minChunks(module, count) {
                return module.resource && module.resource.indexOf(path.join('routes', dir)) > -1 && count > 1;
            },
        })),
        // 压缩js文件，ie8支持插件使用Es3ifyPlugin
        new webpack.optimize.UglifyJsPlugin({
            mangle: {
                screw_ie8: false, // 支持ie8
            }, // 混淆
            compress: {
                warnings: false, // 去除警告
                screw_ie8: false, // 支持ie8
            }, // 压缩
            comments: false, // 去除注释
        }),
        new Es3ifyPlugin(),
        // 定义全局环境变量为生产环境
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
                EWT_ENV: JSON.stringify(process.env.EWT_ENV || 'online'),
            },
        }),
        new ExtractTextPlugin('style.all.[hash:8].css'),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: `${srcDir}/index.ejs`,
        }),
    ],
    resolve: {
        // 实际就是自动添加后缀，默认是当成js文件来查找路径
        // 空字符串在此是为了resolve一些在import文件时不带文件扩展名的表达式
        extensions: ['', '.js', 'jsx', 'css', 'less'],

        // 路径别名
        alias: {
            '~': srcDir,
        },
    },
    debug: false,
    // devtool: 'source-map',
    module: {
        loaders: [
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
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loaders: ['babel-loader'],
            },
            {
                test: /(fontawesome-webfont|glyphicons-halflings-regular)\.(woff|woff2|ttf|eot|svg)($|\?)/,
                loader: 'url?limit=1024&name=assets/[name].[hash:10].[ext]',
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

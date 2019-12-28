const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const Es3ifyPlugin = require('es3ify-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { getRoutes, distDir, srcDir, staticDir, ctxDir } = require('./util');
const bundleConfig = require('../static/bundle-config.json');

const routes = getRoutes();
module.exports = {
    entry: {
        app: ['es5-shim', 'es5-shim/es5-sham', 'console-polyfill', srcDir],
    },
    output: {
        path: distDir,
        filename: '[name].[chunkhash:8].bundle.js',
        chunkFilename: '[id].[chunkhash:8].chunk.js',
        publicPath: '',
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.DllReferencePlugin({
            context: ctxDir,
            manifest: require('../static/vendor-manifest.json'),
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            chunks: ['app', 'modules_async', ...routes.map(route => `${route.dir}_async`)],
        }),
        new webpack.optimize.CommonsChunkPlugin({
            children: true,
            async: 'modules_async',
            minChunks(module, count) {
                return module.resource && module.resource.indexOf('node_modules') > -1 && count > 1;
            },
        }),
        ...routes.map(route => new webpack.optimize.CommonsChunkPlugin({
            children: true,
            async: `${route.dir}_async`,
            minChunks(module, count) {
                return module.resource && module.resource.indexOf(route.fpath) > -1 && count > 1;
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
            },
        }),
        new ExtractTextPlugin('style.all.[hash:8].css'),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: `${srcDir}/index.ejs`,
            dllName: bundleConfig.vendor.js,
        }),
        new CopyWebpackPlugin([{ from: staticDir, to: distDir }]),
    ],
    resolve: {
        // 实际就是自动添加后缀，默认是当成js文件来查找路径
        // 空字符串在此是为了resolve一些在import文件时不带文件扩展名的表达式
        extensions: ['', '.js', '.jsx', '.json'],

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
                loaders: ['babel-loader?cacheDirectory'],
            },
            {
                test: /(fontawesome-webfont|glyphicons-halflings-regular)\.(woff|woff2|ttf|eot|svg)($|\?)/,
                loader: 'url?limit=1024&name=assets/[name].[hash:10].[ext]',
            },
            {
                test: /\.(jpg|png|gif)$/,
                loader: 'url?limit=10000&name=assets/[name].[hash:10].[ext]',
            },
        ],
    },
};

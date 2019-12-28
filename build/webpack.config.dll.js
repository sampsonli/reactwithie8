const webpack = require('webpack');
const path = require('path');
const Es3ifyPlugin = require('es3ify-webpack-plugin');

module.exports = {
    entry: {
        vendor: ['es6-promise', 'react', 'prop-types', 'react-dom', 'react-router', 'history', 'react-redux', 'redux', 'axios', 'classnames', 'react-deliverer', 'moment'],
    },

    output: {
        filename: '[name].dll.js',
        path: path.resolve(__dirname, '../static'),
        library: '[name]_lib',
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
            },
        }),
        new webpack.DllPlugin({
            path: path.resolve(__dirname, '../static/[name]-manifest.json'),
            name: '[name]_lib',
        }),
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
    ],
};

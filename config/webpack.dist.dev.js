/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * 打包开发模式下的资源
 */

const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'source-map',

    entry: {
        main: './src/build-umd.ts'
    },
    output: {
        // eslint-disable-next-line no-undef
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/dist/',
        filename: 'rabbit.js',
        library: 'rabbit',
        libraryTarget: 'umd',
        umdNamedDefine: true
    }
});
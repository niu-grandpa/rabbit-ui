/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * 打包生产模式下的资源
 */

const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = merge(common, {
    devtool: 'source-map',
    entry: {
        main: './src/build-umd.ts'
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/dist/',
        filename: 'rabbit.min.js',
        library: 'rabbit',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },

    plugins: [
        new UglifyJSPlugin({
            sourceMap: true,
            parallel: true
        }),

        new CompressionPlugin({
            algorithm: 'gzip',
            test: /\.js$|\.css/,
            threshold: 10240,
            minRatio: 0.8
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new OptimizeCSSAssetsPlugin({})
    ]
});
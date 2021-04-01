/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * 公共配置
 */

const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    module: {
        rules: [{
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    sourceMap: true
                },
                exclude: /node_modules/
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader'
                }
            },
            {
                test: /\.css$/i,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    { loader: 'css-loader' },
                    { loader: 'postcss-loader' }
                ]
            },
            {
                test: /\.less$/i,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            sourceMap: true,
                            lessOptions: {
                                javascriptEnabled: true
                            }
                        }
                    },
                    { loader: 'postcss-loader' }
                ]
            },
            {
                test: /\.(png|jpe?g|gif|webp)$/i,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: 'images/[name].[ext]',
                        // 小于 2k 的图片转成 base64 编码
                        limit: 2024,
                        publicPath: '../'
                    }
                }]
            },
            {
                test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/i,
                use: {
                    loader: 'file-loader',
                    options: {
                        limit: 4096,
                        name: './fonts/[name].[ext]',
                        publicPath: '../'
                    }
                }
            },
            {
                test: /\.(html|tpl)$/,
                use: {
                    loader: 'html-loader'
                }
            }
        ]
    },

    resolve: {
        extensions: ['.ts', '.js']
    },

    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin(),
        //分离出css文件
        new MiniCssExtractPlugin({
            filename: 'styles/rabbit.css',
            chunkFilename: '[id].css',
            ignoreOrder: false
        })
    ]
};
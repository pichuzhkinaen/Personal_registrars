const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;



const config_index = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {index: './js/index.js', 
            card: './js/card.js'},
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    optimization: {
        // splitChunks: {
        //     chunks: 'all'
        // }
    },
    devServer: {
        port: 8080,
        hot: isDev
    },
    devtool: isDev ? 'source-map' : '',
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html',
            filename: 'index.html',
            chunks: ['index']
        }),
        new HTMLWebpackPlugin({
            template: './card.html',
            filename: 'card.html',
            chunks: ['card']
        }),
        new CleanWebpackPlugin(),
        // new CopyWebpackPlugin({ 
        //     patterns: [{
        //         from: path.resolve(__dirname, 'src/favicon.ico'), 
        //         to: path.resolve(__dirname, 'dist')
        //     }]
        // }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                        // options: {
                        //     //hmr: isDev,
                        //     //reloadAll: true
                        // },
                    },
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                // use: ['file-loader?name=[name].[contenthash].[ext]']
                loader: 'file-loader',
                options: {
                    name: '[name].[contenthash].[ext]',
                }
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[contenthash].[ext]',
                }
            },
            {
                test: /\.html$/,
                //loader: 'html-loader'
                use: ['html-loader']
            }
        ]
    }
};



const config_card = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {card: './js/card.js'},
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    devServer: {
        port: 8080,
        hot: isDev
    },
    devtool: isDev ? 'source-map' : '',
    plugins: [
        new HTMLWebpackPlugin({
            template: './card.html',
            filename: 'card.html'
        }),
        new CleanWebpackPlugin(),
        // new CopyWebpackPlugin({ 
        //     patterns: [{
        //         from: path.resolve(__dirname, 'src/favicon.ico'), 
        //         to: path.resolve(__dirname, 'dist')
        //     }]
        // }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        })
    ],
    module: {
        rules: [
            // {
            //     test: /\.css$/,
            //     use: [
            //         {
            //             loader: MiniCssExtractPlugin.loader
            //             // options: {
            //             //     //hmr: isDev,
            //             //     //reloadAll: true
            //             // },
            //         },
            //         'css-loader'
            //     ]
            // },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  'style-loader',
                  // Translates CSS into CommonJS
                  'css-loader',
                  // Compiles Sass to CSS
                  'sass-loader',
                ],
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                // use: ['file-loader?name=[name].[contenthash].[ext]']
                loader: 'file-loader',
                options: {
                    name: '[name].[contenthash].[ext]',
                }
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[contenthash].[ext]',
                }
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    }
};



module.exports = [config_index]
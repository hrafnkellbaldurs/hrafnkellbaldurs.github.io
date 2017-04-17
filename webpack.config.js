var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: { 
        filename: 'bundle.js' 
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,       
                query: {
                    presets: ['es2015', 'react']
                },         
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                exclude: [/node_modules/, /core.scss$/],
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                localIdentName: '[name]-[local]__[hash:base64:6]'
                            }
                        },
                        'sass-loader'
                    ]
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'bundle.css',
            disable: false,
            allChunks: true
        })
    ],
    devServer: {
        historyApiFallback: true,
        contentBase: './'
    },
    devtool: '#inline-source-map'
};
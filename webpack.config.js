var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var srcDir = path.join(__dirname, 'src');

module.exports = {
    entry: './src/index.js',
    output: { 
        filename: 'bundle.js' 
    },
    module: {
        rules: [
            // JSX
            {
                test: /\.jsx?$/,       
                query: {
                    presets: ['es2015', 'react']
                },         
                loader: 'babel-loader',
                include: srcDir 
            },

            // SCSS
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                localIdentName: '[name]-[local]__[hash:base64:6]',
                                importLoaders: 1
                            }
                        },
                        'sass-loader',
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: function() {
                                    return [require('autoprefixer')]
                                }
                            }
                        }
                    ]
                }),
                include: srcDir
            },

            // FILES
            {
                test: /\.(png|jpg)$/,
                use: 'file-loader?name=[name].[ext]&outputPath=images/',
                include: srcDir
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
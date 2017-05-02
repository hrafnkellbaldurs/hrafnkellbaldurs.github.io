var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var paths = {
    dist: path.join(__dirname, 'dist'),
    src: path.join(__dirname, 'src')
};

module.exports = {
    entry: './src/index.js',
    output: { 
        path: paths.dist,
        filename: 'bundle.js',
        publicPath: paths.dist
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
                include: paths.src 
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
                include: paths.src
            },

            // FILES
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: 'file-loader?name=[name].[ext]&outputPath=images/&publicPath=./',
                include: paths.src
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
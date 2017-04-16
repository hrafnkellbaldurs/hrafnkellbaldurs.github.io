var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: { 
        path: __dirname, 
        publicPath: '/', 
        filename: 'bundle.js' 
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: /\.jsx?$/,
                query: {
                    presets: ['es2015', 'react']
                },
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './'
    }
};
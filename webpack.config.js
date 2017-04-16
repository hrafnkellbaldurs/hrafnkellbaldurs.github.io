var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: { 
        path: __dirname, 
        //publicPath: '/', 
        filename: 'bundle.js' 
    },

    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
    // },
    // resolve: {
    //     extensions: ['', '.js', '.jsx']
    // },
    // devServer: {
    //     historyApiFallback: true,
    //     contentBase: './'
    // }
};
var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: './content/main.js',
    output: {
        path: path.resolve(__dirname, 'assets/build'),
        filename: 'main.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};

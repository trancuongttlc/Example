'use strict';

const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'client');
const APP_DIR = path.resolve(__dirname, 'client/app');

const config = {
    entry: APP_DIR + '/app.jsx',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module : {
        loaders : [
            {
                test : /\.jsx?/,
                include : APP_DIR,
                loader : 'babel'
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            compress: { warnings: false },
            output: { comments: false },
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
    ]
};

module.exports = config;


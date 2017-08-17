const webpack = require('webpack');
var path = require('path');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var AssetsPlugin = require('assets-webpack-plugin');
const merge = require('webpack-merge');

const { config, BUILD_DIR } = require('./shared.config');

const cfg = merge(config, {
    
    profile: true,
    cache: false,
    watch: false,
    stats: {
        assets: true,
        chunks: false,
        chunkModules: false,
        modules: false,
        reasons: false,
        source: false,
    },

    entry: {
        main: ['babel-polyfill', "./main"],
        admin: ['babel-polyfill', "./admin"],
    },

    performance: {
        hints: 'error',
        maxAssetSize: 500000,
        maxEntrypointSize: 1000000,
    },

    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(true),
        new UglifyJsPlugin({ compress: { warnings: false }, sourceMap: true }),
        new AssetsPlugin({path: BUILD_DIR, filename: 'assets.json'}),
    ],

    devtool: false       //"source-map"
})

module.exports = cfg;
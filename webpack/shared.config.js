const webpack = require('webpack');
var path = require('path');
var AssetsPlugin = require('assets-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV || 'development';
const isDev = () => NODE_ENV === 'development';
const SRC_DIR = __dirname + "./../src";
const BUILD_DIR = __dirname + "./../build";


const config = {
    context: SRC_DIR,
    entry: { 
    },
    output: {
        path: BUILD_DIR,
        filename: "[name].[chunkhash].js"
    },

    resolve:{
        alias: {
            ui: path.resolve(SRC_DIR, 'ui'),
            atoms: path.resolve(SRC_DIR, 'ui/atoms'),
            molecules: path.resolve(SRC_DIR, 'ui/molecules')
        }
    },

    watch: isDev(),
    watchOptions: {
        aggregateTimeout: 100
    },
    
    devtool: isDev() ? "cheap-eval-source-map" : "source-map",   // eval для dev, source-map - для prod

    plugins: [
        new webpack.DefinePlugin({NODE_ENV: JSON.stringify(NODE_ENV) }),
    ],

    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel-loader'}
        ]
    },

    devServer: {
        contentBase: BUILD_DIR,
        hot: true,
    }
};

module.exports = {
    SRC_DIR,
    BUILD_DIR,
    config,
}
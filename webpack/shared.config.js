const webpack = require('webpack');
const path = require('path');
const AssetsPlugin = require('assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV || 'development';
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

    plugins: [
        new CleanWebpackPlugin(["build"], {root: BUILD_DIR + "./..", verbose: true}),
        new webpack.DefinePlugin({NODE_ENV: JSON.stringify(NODE_ENV) }),
        new HtmlWebpackPlugin({filename: 'index.html', chunks: ['main'], title: 'Main page'}),
        new HtmlWebpackPlugin({filename: 'admin.html', chunks: ['admin'], title: 'Admin page'})
    ],

    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/}
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
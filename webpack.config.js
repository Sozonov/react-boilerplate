const webpack = require('webpack');
var path = require('path');

const NODE_ENV = process.env.NODE_ENV || 'development';
const isDev = () => NODE_ENV === 'development';

module.exports = {
    entry: "./src/home",
    output: {
        path: __dirname + "/build",
        filename: "build.js"
    },

    resolve:{
        alias: {
            ui: path.resolve(__dirname, 'src/ui'),
            atoms: path.resolve(__dirname, 'src/ui/atoms'),
            molecules: path.resolve(__dirname, 'src/ui/molecules')
        }
    },

    watch: isDev(),
    watchOptions: {
        aggregateTimeout: 100
    },
    
    devtool: isDev() ? "eval" : "source-map",   // eval для dev, source-map - для prod

    plugins: [
        new webpack.DefinePlugin({NODE_ENV: JSON.stringify(NODE_ENV) })
    ],

    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel-loader'}
        ]
    }
};
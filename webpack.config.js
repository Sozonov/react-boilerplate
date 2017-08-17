const webpack = require('webpack');
var path = require('path');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');


const NODE_ENV = process.env.NODE_ENV || 'development';
const isDev = () => NODE_ENV === 'development';


const plugins = [
    new webpack.DefinePlugin({NODE_ENV: JSON.stringify(NODE_ENV) }),
];
if (!isDev()){
    plugins.push(new UglifyJsPlugin({ compress: { warnings: false }, sourceMap: true }))    
}

module.exports = {
    context: __dirname + "/src",
    entry: { 
        home: "./main",
        admin: "./admin"
    },
    output: {
        path: __dirname + "/build",
        filename: "[name].js"
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
    
    devtool: isDev() ? "cheap-eval-source-map" : "source-map",   // eval для dev, source-map - для prod

    plugins,

    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel-loader'}
        ]
    }
};
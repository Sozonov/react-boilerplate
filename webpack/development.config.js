const webpack = require("webpack");
var path = require("path");
var UglifyJsPlugin = require("uglifyjs-webpack-plugin");
var AssetsPlugin = require("assets-webpack-plugin");
const merge = require("webpack-merge");

const { config, BUILD_DIR } = require("./shared.config");

module.exports = merge(config, {
  devtool: "cheap-eval-source-map",
  profile: false,

  watchOptions: {
    aggregateTimeout: 100
  },

  entry: {
    main: ['babel-polyfill', "./main"],
    admin: ['babel-polyfill', "./admin"],
  },

  output: {
    pathinfo: true,
    filename: "[name].dev.js"
  },

  performance: {
    hints: false
  },

  plugins: [new webpack.HotModuleReplacementPlugin()],

  devServer: {
    contentBase: BUILD_DIR,
    hot: true
  }
});

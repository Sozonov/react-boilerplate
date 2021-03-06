const webpack = require('webpack')
const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const AssetsPlugin = require('assets-webpack-plugin')
const merge = require('webpack-merge')

const { config } = require('./shared.config')
const { BUILD_DIR } = require('./consts.js')

module.exports = merge(config, {
  devtool: 'source-map',
  profile: false,

  watchOptions: {
    aggregateTimeout: 100
  },

  entry: {
    main: ['babel-polyfill', 'react-hot-loader/patch', './main']
  },

  output: {
    pathinfo: true,
    filename: '[name].dev.js'
  },

  performance: {
    hints: false
  },

  plugins: [new webpack.HotModuleReplacementPlugin()],

  devServer: {
    contentBase: `${BUILD_DIR}/../dll`,
    hot: true,
    historyApiFallback: true
  }
})

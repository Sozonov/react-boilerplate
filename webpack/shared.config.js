const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')

const { BUILD_DIR, SRC_DIR } = require('./consts.js')

const NODE_ENV = process.env.NODE_ENV || 'development'

const config = {
  context: SRC_DIR,
  target: 'web',
  entry: {},
  output: {
    path: BUILD_DIR,
    filename: '[name].[chunkhash].js'
  },

  resolve: {
    modules: ['node_modules', SRC_DIR],
    extensions: ['.js', '.svg']
  },

  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new CleanWebpackPlugin(['build'], { root: `${BUILD_DIR}./..` }),
    new webpack.DefinePlugin({ NODE_ENV: JSON.stringify(NODE_ENV) }),
    new HtmlWebpackPlugin({
      filename: 'admin.html',
      chunks: ['admin'],
      title: 'Admin page'
    }),
    new webpack.DllReferencePlugin({
      context: SRC_DIR,
      manifest: require('./../dll/vendor-manifest.json') // eslint-disable-line
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      chunks: ['main'],
      title: 'Main page',
      template: `${SRC_DIR}/template.html`
    }),
    new AddAssetHtmlPlugin({
      filepath: `${BUILD_DIR}/../dll/vendor.*.js`,
      includeSourcemap: false
    })
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader: 'react-svg-loader',
            options: {
              svgo: {
                plugins: [{ removeTitle: false }],
                floatPrecision: 2
              }
            }
          }
        ]
      }
    ]
  },

  devServer: {
    contentBase: BUILD_DIR,
    hot: true
  }
}

module.exports = {
  SRC_DIR,
  BUILD_DIR,
  config
}

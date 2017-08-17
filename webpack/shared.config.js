const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')


const NODE_ENV = process.env.NODE_ENV || 'development'
const SRC_DIR = `${__dirname}./../src`
const BUILD_DIR = `${__dirname}./../build`

const config = {
  context: SRC_DIR,
  target: 'web',
  entry: {},
  output: {
    path: BUILD_DIR,
    filename: '[name].[chunkhash].js',
  },

  resolve: {
    alias: {
      ui: path.resolve(SRC_DIR, 'ui'),
      containers: path.resolve(SRC_DIR, 'containers'),
      atoms: path.resolve(SRC_DIR, 'ui/atoms'),
      molecules: path.resolve(SRC_DIR, 'ui/molecules'),
    },
  },

  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new CleanWebpackPlugin(['build'], { root: `${BUILD_DIR}./..` }),
    new webpack.DefinePlugin({ NODE_ENV: JSON.stringify(NODE_ENV) }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      chunks: ['main'],
      title: 'Main page',
      template: `${SRC_DIR}/template.html`,
    }),
    new HtmlWebpackPlugin({
      filename: 'admin.html',
      chunks: ['admin'],
      title: 'Admin page',
    }),
    new webpack.DllReferencePlugin({
      context: SRC_DIR,
      manifest: require('./../dll/vendor-manifest.json'),   // eslint-disable-line
    }),
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },

  devServer: {
    contentBase: BUILD_DIR,
    hot: true,
  },
}

module.exports = {
  SRC_DIR,
  BUILD_DIR,
  config,
}

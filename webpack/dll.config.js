const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const { BUILD_DIR, SRC_DIR } = require('./consts.js')


module.exports = {
  entry: {
    vendor: [`${SRC_DIR}/vendor.js`],
  },
  output: {
    path: `${BUILD_DIR}/../dll`,
    filename: '[name].[chunkhash].js',
    library: '[name]',
  },
  plugins: [
    new CleanWebpackPlugin(['dll'], { root: `${BUILD_DIR}./..` }),
    new webpack.DllPlugin({
      path: `${BUILD_DIR}/../dll/[name]-manifest.json`,
      name: '[name]',
      context: SRC_DIR,
    }),
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new UglifyJsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ],
}

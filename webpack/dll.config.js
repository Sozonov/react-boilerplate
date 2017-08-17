const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const { BUILD_DIR, SRC_DIR } = require('./shared.config.js')


module.exports = {
  entry: {
    vendor: [`${SRC_DIR}/vendor.js`],
  },
  output: {
    path: `${BUILD_DIR}/../dll`,
    filename: 'dll.[name].js',
    library: '[name]',
  },
  plugins: [
    new webpack.DllPlugin({
      path: `${BUILD_DIR}/../dll/[name]-manifest.json`,
      name: '[name]',
      context: SRC_DIR,
    }),
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new UglifyJsPlugin(),
  ],
}

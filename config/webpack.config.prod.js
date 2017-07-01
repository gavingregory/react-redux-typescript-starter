const webpack = require('webpack');
const path = require('path');
const uglifyEsPlugin = require('uglify-es-webpack-plugin');
const common = require('./webpack.config.common');

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('production')
};

module.exports = Object.assign({}, common, {
  bail: true,
  performance: {
    hints: 'warning'
  },
  plugins: common.plugins.concat([
    new webpack.DefinePlugin(GLOBALS),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new uglifyEsPlugin()
  ]),
  target: 'web',
  watch: false
});

const path = require('path');
const webpack = require('webpack');
const common = require('./webpack.config.common');

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('development')
};

module.exports = Object.assign({}, common, {
  devtool: "inline-source-map",
  performance: {
    hints: false
  },
  plugins: common.plugins.concat([
    new webpack.DefinePlugin(GLOBALS)
  ]),
  watchOptions: {
    ignored: /node_modules/,
    aggregateTimeout: 300,
    poll: 1000
  },
  watch: true,
});

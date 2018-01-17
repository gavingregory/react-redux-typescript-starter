const path = require('path');
const webpack = require('webpack');
const CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;

module.exports = {
  context: __dirname,
  resolve: {
    modules: [path.resolve(__dirname, '../src/'), 'node_modules'],
    extensions: [ ".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".jsx" ]
  },
  output:  {
    path: path.resolve(__dirname, '../dist/'),
    filename: '[name].bundle.js'
  },
  entry:   {
    'main': path.join(__dirname, '../src/index.tsx')
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new CheckerPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        filename: 'vendor.bundle.js',
        minChunks (module) {
            const context = module.context;
            return context && context.indexOf('node_modules') >= 0;
        }
    })
  ],
  stats: {
    assets: true,
    children: false,
    chunks: false,
    hash: false,
    modules: false,
    publicPath: false,
    timings: false,
    version: false,
    warnings: false
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'awesome-typescript-loader'
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ],
      },
      {
        test: /\.s?css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  }
};
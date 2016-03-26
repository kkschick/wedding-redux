/* eslint-disable no-var */
var webpack = require('webpack');
var path = require('path');
var less = require('less');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:5000',
    'webpack/hot/dev-server',
    './public/index'
  ],
  output: {
    path: __dirname,
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  resolve: {
    extensions: ['', '.js']
  },
  devtool: 'eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'public')
      },
      {
        test: /\.less$/,
        loader: "style-loader!css-loader!less-loader"
      }
    ]
  }
};

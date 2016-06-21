/* eslint-disable no-var, strict */
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  proxy: {
    '/api/*': 'http://0.0.0.0:5000', // To hit Flask server
  },
}).listen(3000, '0.0.0.0', function (err) {
    if (err) {
      console.log(err);
    }
    console.log('Listening at localhost:3000');
  });

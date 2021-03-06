var webpack = require('webpack');
var getConfig = require('hjs-webpack');

var config = getConfig({
  in: './src/index.js',
  out: 'public',
  isDev: true,
  html: false,
  clearBeforeBuild: true,
  devServer: {
    contentBase: __dirname
  }
  // https: true
});

config.module.preLoaders = [];
config.module.preLoaders.push({test: /\.js$/, loader: 'eslint-loader', exclude: /node_modules/});
config.plugins.push(new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'));

config.entry = {
  vendors: ['react', 'react-router'],
  main: config.entry
};

module.exports = config;

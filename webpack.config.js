const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('bundle.css');

module.exports = {
  entry: {
    client: './src/client/index.js',
    styles: './scss/main.scss'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname)
  },
  devServer: {
    hot: true,
    contentBase: './',
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader!sass-loader!postcss-loader',
        }),
      }
    ]
  },
  plugins: [
    extractCSS,
    new webpack.HotModuleReplacementPlugin(),
  ],
  node: {
    net: 'empty',
    dns: 'empty'
  }
};
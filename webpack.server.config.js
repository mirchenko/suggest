const path = require('path');
const fs = require('fs');
const NodemonPlugin = require('nodemon-webpack-plugin');

let nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function (x) {
    return [ '.bin' ].indexOf(x) === -1;
  })
  .forEach(function (mod) {
    nodeModules[ mod ] = 'commonjs ' + mod;
  });

module.exports = {
  entry: path.join(__dirname, 'src', 'server', 'index'),
  output: {
    path: path.join(__dirname),
    filename: 'server.js'
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new NodemonPlugin()
  ],
  externals: nodeModules
};
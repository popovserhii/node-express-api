const { resolve } = require('path');
const nodeExternals = require('webpack-node-externals');
const NodemonPlugin = require('nodemon-webpack-plugin');

module.exports = {
  target: 'node',
  externals: [nodeExternals()],
  plugins: [new NodemonPlugin()],
  entry: {
    index: './bin/www.ts'
  },
  output: {
    path: resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
};

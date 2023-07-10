const webpack = require('webpack')
const path = require('path')

module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: ['react-hot-loader/webpack','babel-loader']
      }
    ]
  }
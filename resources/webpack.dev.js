const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    port: 8000,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        secure: false
      }
    }
  },
  stats: {
    errorDetails: true
  },
  plugins: [
    new HtmlWebpackPlugin ({
      title: 'Marvel - Development',
      template:path.join(__dirname, '/public/index.html'),
      inject: 'body'
    })
  ]
})
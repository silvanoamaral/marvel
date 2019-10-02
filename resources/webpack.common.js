const path = require('path')

module.exports = {
  devtool: 'source-map',
  entry: {
    app: path.join(__dirname, '/index.js')
  },
  output: {
    publicPath: '/',
    filename: 'bundle.js',
    path: path.join(__dirname, '/dist')
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        exclude: /node_modules/,
        test: /\.(s*)css$/,
        loader:['style-loader','css-loader', 'sass-loader']
      },
      {
        test: /\.(jpe?g|png|gif|mp3|jpg)$/i,
        include: path.resolve(__dirname, 'assets/image/'),
        use: ['file-loader']
      }
    ]
  }
}
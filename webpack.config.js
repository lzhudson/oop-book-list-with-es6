const path = require('path');
/** @type {import('webpack').Configuration} */

module.exports = {
  entry: path.resolve(__dirname, 'app.js'),
  output: {
    path: path.resolve(__dirname),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, './'),
    compress: false,
    port: 9000
  },
  module: {
    
  }
}
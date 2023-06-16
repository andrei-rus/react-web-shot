const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        include: path.resolve(__dirname, 'src'),
        use: ['babel-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/[name].css'
    }),
    new HtmlWebpackPlugin({
    template: path.resolve(__dirname, 'src', 'index.html')
  })]
}
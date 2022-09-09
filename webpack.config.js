const HtmlWebpackPlugin = require('html-webpack-plugin');
const {resolve} = require('path')

module.exports = {
  entry: resolve(__dirname, 'src', 'index.js'),
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'main.[contenthash].js'
  },
  module: {
    rules: [
      {
      test: /\.s[ac]ss$/i,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ] 
  },
  {
  test: /\.(png|jpg|gif)$/i,
  use: [
    {
      loader: 'img-optimize-loader',
      options:{
        compress:{
          mode: "high",
          webp:true,
          gifsicle:true,
          disableOnDevelopment:false
        }
      }
    }
  ]
  },
  {
    test: /\.(mp3)$/i,
    use: [
      'file-loader'
    ]
  }
]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'src', 'index.html')
    })
  ]
}
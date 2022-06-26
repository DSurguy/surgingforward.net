const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const yargs = require('yargs')

let argv = yargs.argv

module.exports = {
  mode: argv.prod ? 'production': 'development',
  entry: {
    app: './src/client/index.js'
  },
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader" },
      { 
        test: /\.css?$/,
        exclude: /node_modules/,
        use: [
          !argv.prod ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        type: 'asset/resource'
      }
    ]
  },
  devtool: !argv.prod ? 'inline-source-map' : undefined,
  devServer: {
    contentBase: path.resolve(__dirname, 'dist')
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        path.resolve(__dirname, 'dist')
      ]
    }),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      title: 'Derek Surguy | Frontend Software Engineer',
      template: path.resolve(__dirname, 'src/client/index.html')
    })
  ]
}
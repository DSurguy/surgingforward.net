const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, argv) => {
  const isProd = argv?.mode === 'production';
  const config = {
    mode: argv.mode || 'development',
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
            isProd ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader'
          ]
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          type: 'asset/resource'
        }
      ]
    },
    devtool: isProd ? undefined : 'inline-source-map',
    devServer: {
      static: {
        directory: path.resolve(__dirname, 'dist')
      },
      compress: true
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

  return config;
}
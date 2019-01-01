const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const yargs = require('yargs')

let argv = yargs.argv

module.exports = {
  mode: argv.prod ? 'production': 'development',
  entry: {
    app: './src/client/index.js'
  },
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  devtool: !argv.prod ? 'inline-source-map' : undefined,
  devServer: {
    contentBase: path.resolve(__dirname, 'dist')
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist/public')
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          name: 'vendor',
          test: /node_modules/,
          enforce: true
        }
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Derek Surguy | Freelance Web Software',
      template: path.resolve(__dirname, 'src/client/index.html')
    })
  ]
}
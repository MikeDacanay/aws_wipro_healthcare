const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  output: {
    path: path.join(__dirname, 'wipro-healthcare'),
    filename: 'js/bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'wipro-healthcare'),
    port: 3000
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin()
  ],
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /\node_modules/,
      use: {
        loader: 'babel-loader'
      }
    },
    {
      test: /\.ttf|eot|woff|woff2$/,
      exclude: /\node_modules/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        outputPath: 'fonts/'
      }
    },
    {
      test: /\.(jpe?g|png|gif|svg)$/i,
      exclude: /\node_modules/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        outputPath: 'assets/'
      }
    },
    {
      test: /\.html$/,
      loader: 'html-loader',


    },
    {
      test: /\.(mp4|mov|webm)$/,
      use: 'file-loader?name=videos/[name].[ext]',
    },
    {
      test: /\.(sa|sc|c)ss$/i,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            sourceMap: true
          }
        },
        {
          loader: 'resolve-url-loader',
          options: {
            debug: true
          }
        },

        {
          loader: 'postcss-loader',
          options: {
            sourceMap: true,
            config: {
              path: 'postcss.config.js'
            }
          }
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true,
          }
        }

      ],
    }

    ]
  }
}
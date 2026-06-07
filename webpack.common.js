const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin')

const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    index: './src/index.js',
    media: './src/media.js',
    article: './src/article-page.js'
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'docs')
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      },
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env']]
              }
            }
          }
        ]
      },
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        resourceQuery: /raw/,
        type: 'asset/source'
      },
      {
        test: /\.png/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
      {
        test: /\.svg/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
      {
        test: /\.(woff|woff2|ttf|otf)$/i, 
  type: 'asset/resource',
  generator: {
    filename: 'fonts/[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css',
    }),

    // Index
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
      chunks: ['index']
    }),

    // Section стили фрейм ап
    new HtmlWebpackPlugin({
      template: './src/frameup.html',
      filename: './frameup.html',
      chunks: ['index']
    }),

    // Section стили афро
    new HtmlWebpackPlugin({
      template: './src/afro.html',
      filename: './afro.html',
      chunks: ['index']
    }),

    // Section стили кизомба
    new HtmlWebpackPlugin({
      template: './src/kizomba.html',
      filename: './kizomba.html',
      chunks: ['index']
    }),

    // Section стили кизомба
    new HtmlWebpackPlugin({
      template: './src/bachata.html',
      filename: './bachata.html',
      chunks: ['index']
    }),

     // Section стили кизомба
    new HtmlWebpackPlugin({
      template: './src/desire.html',
      filename: './desire.html',
      chunks: ['index']
    }),

    

    


    // Section музыка
    new HtmlWebpackPlugin({
      template: './src/music.html',
      filename: './music.html',
      chunks: ['index']
    }),


    // Section помощник
    new HtmlWebpackPlugin({
      template: './src/helper.html',
      filename: './helper.html',
      chunks: ['index']
    }),



    // Section медиа
    new HtmlWebpackPlugin({
      template: './src/Media.html',
      filename: './Media.html',
      chunks: ['media']
    }),

    // Section статьи
    new HtmlWebpackPlugin({
      template: './src/Articles/FrameUPStrip.html',
      filename: './Articles/FrameUPStrip.html',
      chunks: ['article']
    }),

     new HtmlWebpackPlugin({
      template: './src/Articles/BachataKizomba.html',
      filename: './Articles/BachataKizomba.html',
      chunks: ['article']
    }),
    


    // Partials
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/analytics.html'),
        location: 'analytics',
        template_filename: '*',
        priority: 'replace'
      }
    ])
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin()]
  }
}
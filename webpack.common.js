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
    article: './src/article-page.js',
    style: './src/style.js'
  },
  output: {
  filename: '[name].[contenthash].js',
  path: path.resolve(__dirname, 'docs'),
  publicPath: '/',   // явный корень — на случай, если 'auto' не сработал
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
      template: './src/Index.html',
      filename: './index.html',
      chunks: ['index']
    }),

    // Справочник
    new HtmlWebpackPlugin({
      template: './src/directory.html',
      filename: './directory.html',
      chunks: ['index']
    }),

    // Section стили фрейм ап
    new HtmlWebpackPlugin({
      template: './src/frameup.html',
      filename: './frameup.html',
      chunks: ['style']
    }),

    // Section стили вог
    new HtmlWebpackPlugin({
      template: './src/vogue.html',
      filename: './vogue.html',
      chunks: ['style']
    }),

    // Section стили фристайл
    new HtmlWebpackPlugin({
      template: './src/freestyle.html',
      filename: './freestyle.html',
      chunks: ['style']
    }),

    // Section стили афро
    new HtmlWebpackPlugin({
      template: './src/afro.html',
      filename: './afro.html',
      chunks: ['style']
    }),

    // Section стили кизомба
    new HtmlWebpackPlugin({
      template: './src/kizomba.html',
      filename: './kizomba.html',
      chunks: ['style']
    }),

    // Section стили бачата пара
    new HtmlWebpackPlugin({
      template: './src/bachata.html',
      filename: './bachata.html',
      chunks: ['style']
    }),

    // Section стили латина
    new HtmlWebpackPlugin({
      template: './src/latina.html',
      filename: './latina.html',
      chunks: ['style']
    }),

    // Section стили хип-хоп
    new HtmlWebpackPlugin({
      template: './src/hiphop.html',
      filename: './hiphop.html',
      chunks: ['style']
    }),

    // Section стили контемп
    new HtmlWebpackPlugin({
      template: './src/contemporary.html',
      filename: './contemporary.html',
      chunks: ['style']
    }),

    // Section стили реггетон
    new HtmlWebpackPlugin({
      template: './src/reggaeton.html',
      filename: './reggaeton.html',
      chunks: ['style']
    }),

    // Section стили джаз фанк
    new HtmlWebpackPlugin({
      template: './src/jazzfank.html',
      filename: './jazzfank.html',
      chunks: ['style']
    }),

    // Section стили реггетон
    new HtmlWebpackPlugin({
      template: './src/highheels.html',
      filename: './highheels.html',
      chunks: ['style']
    }),

    // Section стили реггетон
    new HtmlWebpackPlugin({
      template: './src/bachatasolo.html',
      filename: './bachatasolo.html',
      chunks: ['style']
    }),

    // Section стили реггетон
    new HtmlWebpackPlugin({
      template: './src/dancehall.html',
      filename: './dancehall.html',
      chunks: ['style']
    }),




    
    


     // Section желания
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

    // Section подборки медиа
    new HtmlWebpackPlugin({
      template: './src/Articles/Impro_selection.html',
      filename: './Articles/Impro_selection.html',
      chunks: ['article']
    }),

    new HtmlWebpackPlugin({
      template: './src/Articles/MK_selection.html',
      filename: './Articles/MK_selection.html',
      chunks: ['article']
    }),

    new HtmlWebpackPlugin({
      template: './src/Articles/Cinema_selection.html',
      filename: './Articles/Cinema_selection.html',
      chunks: ['article']
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
    
    new HtmlWebpackPlugin({
      template: './src/Articles/DelTvorch.html',
      filename: './Articles/DelTvorch.html',
      chunks: ['article']
    }), 

    new HtmlWebpackPlugin({
      template: './src/Articles/HipHopFreestyle.html',
      filename: './Articles/HipHopFreestyle.html',
      chunks: ['article']
    }),

    new HtmlWebpackPlugin({
      template: './src/Articles/ImproPotok.html',
      filename: './Articles/ImproPotok.html',
      chunks: ['article']
    }),

    new HtmlWebpackPlugin({
      template: './src/Articles/StMK.html',
      filename: './Articles/StMK.html',
      chunks: ['article']
    }),

   
    new HtmlWebpackPlugin({
      template: './src/Articles/Nemoe.html',
      filename: './Articles/Nemoe.html',
      chunks: ['article']
    }),

    
    new HtmlWebpackPlugin({
      template: './src/Articles/PravilaT.html',
      filename: './Articles/PravilaT.html',
      chunks: ['article']
    }),

    
    new HtmlWebpackPlugin({
      template: './src/Articles/RaznoeT.html',
      filename: './Articles/RaznoeT.html',
      chunks: ['article']
    }),

    
    new HtmlWebpackPlugin({
      template: './src/Articles/OstDr.html',
      filename: './Articles/OstDr.html',
      chunks: ['article']
    }),

    
    new HtmlWebpackPlugin({
      template: './src/Articles/OniPodumaut.html',
      filename: './Articles/OniPodumaut.html',
      chunks: ['article']
    }),

    
    new HtmlWebpackPlugin({
      template: './src/Articles/BoimsaT.html',
      filename: './Articles/BoimsaT.html',
      chunks: ['article']
    }),

    
    new HtmlWebpackPlugin({
      template: './src/Articles/PolzaMK.html',
      filename: './Articles/PolzaMK.html',
      chunks: ['article']
    }),

    
    new HtmlWebpackPlugin({
      template: './src/Articles/ImpImprovise.html',
      filename: './Articles/ImpImprovise.html',
      chunks: ['article']
    }),

    
    new HtmlWebpackPlugin({
      template: './src/Articles/TaskCool.html',
      filename: './Articles/TaskCool.html',
      chunks: ['article']
    }),

    
    new HtmlWebpackPlugin({
      template: './src/Articles/ShortsDance.html',
      filename: './Articles/ShortsDance.html',
      chunks: ['article']
    }),

    
    new HtmlWebpackPlugin({
      template: './src/Articles/HairT.html',
      filename: './Articles/HairT.html',
      chunks: ['article']
    }),

    
    new HtmlWebpackPlugin({
      template: './src/Articles/IzolT.html',
      filename: './Articles/IzolT.html',
      chunks: ['article']
    }),

    
    new HtmlWebpackPlugin({
      template: './src/Articles/TochkiDv.html',
      filename: './Articles/TochkiDv.html',
      chunks: ['article']
    }),

    
    new HtmlWebpackPlugin({
      template: './src/Articles/Kablyki.html',
      filename: './Articles/Kablyki.html',
      chunks: ['article']
    }),

    
    new HtmlWebpackPlugin({
      template: './src/Articles/StripShoes.html',
      filename: './Articles/StripShoes.html',
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
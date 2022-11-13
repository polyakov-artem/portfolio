/* eslint-disable import/no-extraneous-dependencies */
const { merge } = require('webpack-merge');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const baseConfig = require('./base.cfg');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(baseConfig, {
  output: {
    publicPath: '/portfolio/'
  },
  mode: 'production',
  devtool: false,

  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin({
        test: /\.js(\?.*)?$/i,
        extractComments: false,
        terserOptions: {
          format: {
            comments: false,
          },
        },
      })
    ],
  },

  /* Performance treshold configuration values */
  // performance: {
  //   maxEntrypointSize: 512000,
  //   maxAssetSize: 512000,
  // },

  module: {
    rules: [{
        test: /\.(css|scss|sass)$/,
        use: ['css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ]
          }
        }
      }
    ]
  },
});


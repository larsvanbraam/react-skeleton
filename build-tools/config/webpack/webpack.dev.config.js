const merge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const baseWebpackConfig = require('./webpack.base.config.js');
const detectPort = require('detect-port');
const DashboardPlugin = require('webpack-dashboard/plugin');
const opn = require('opn');
const webpackHelpers = require('./webpackHelpers');
const config = require('../../config/config');

const devWebpackConfig = merge(baseWebpackConfig, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.scss$/,
        oneOf: [
          {
            use: webpackHelpers.getScssLoaderConfig(true),
          },
        ],
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: path.posix.join('', 'font/[name].[hash:7].[ext]'),
            },
          },
        ],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    compress: false,
    quiet: true,
    open: false,
    disableHostCheck: true,
    progress: false,
    host: process.env.HOST || '0.0.0.0',
    port: process.env.PORT || config.dev.port,
    overlay: {
      warnings: false,
      errors: true,
    },
    stats: {
      all: false,
    },
    proxy: config.dev.proxyTable,
    https: config.useHttps,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env,
    }),
    new DashboardPlugin(),
  ],
});

module.exports = detectPort(devWebpackConfig.devServer.port).then(function(port) {
  process.env.PORT = port;
  devWebpackConfig.devServer.port = port;

  devWebpackConfig.plugins.push(
    new FriendlyErrorsWebpackPlugin({
      clearConsole: true,

      compilationSuccessInfo: {
        messages: [
          `Your application is running here: ${
            config.useHttps ? 'https' : 'http'
          }://localhost:${port}`,
        ],
      },
    }),
  );

  if (config.dev.autoOpenBrowser) {
    opn(`${config.useHttps ? 'https' : 'http'}://localhost:${port}`).catch(() => {});
  }

  return devWebpackConfig;
});

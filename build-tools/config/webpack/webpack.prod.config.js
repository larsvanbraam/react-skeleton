const merge = require('webpack-merge');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const baseWebpackConfig = require('./webpack.base.config');
const webpackHelpers = require('./webpackHelpers');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;

const config = require('../../config/config');

const env = config.build.env;
const projectRoot = path.resolve(__dirname, '../../../');

const prodWebpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.scss$/,
        oneOf: [
          {
            use: webpackHelpers.getScssLoaderConfig(false),
          },
        ],
      },
    ],
  },
  devtool: false,
  output: {
    filename: '[name].[contenthash].js',
    chunkFilename: path.posix.join('', '[name].[contenthash].js'),
    path: path.join(projectRoot, 'dist'),
  },
  optimization: {
    concatenateModules: true,
    minimize: true,
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
    runtimeChunk: false,
  },
  plugins: [
    new WebpackCleanupPlugin(),
    new webpack.DefinePlugin({
      'process.env': env,
    }),
    new OptimizeCssAssetsPlugin({
      cssProcessorOptions: {
        parser: require('postcss-safe-parser'),
        discardComments: {
          removeAll: true,
        },
      },
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    new ImageminPlugin({
      disable: !config.build.enableImageOptimization,
      svgo: null,
      gifsicle: null,
      pngquant: config.build.enablePNGQuant ? { quality: config.build.pngQuantQuality } : null,
    }),
    new CopyWebpackPlugin([
      {
        from: 'static',
        to: config.build.versionPath,
        ignore: ['.gitkeep'],
      },
    ]),
    new CopyWebpackPlugin([
      {
        from: 'staticRoot',
        to: '',
        ignore: ['.gitkeep'],
      },
    ]),
    ...(config.build.analyze
      ? [
          new BundleAnalyzerPlugin({
            defaultSizes: 'gzip',
          }),
        ]
      : []),
    ...(config.build.generateIcons
      ? [
          new FaviconsWebpackPlugin({
            logo: path.join(projectRoot, './static/image/favicon.png'),
            prefix: config.build.versionPath + 'favicon/',
            emitStats: false,
            persistentCache: false,
            inject: true,
            title: '',
            icons: {
              android: false,
              appleIcon: false,
              appleStartup: false,
              coast: false,
              favicons: true,
              firefox: false,
              opengraph: false,
              twitter: false,
              yandex: false,
              windows: false,
            },
          }),
        ]
      : []),
  ],
});

module.exports = prodWebpackConfig;

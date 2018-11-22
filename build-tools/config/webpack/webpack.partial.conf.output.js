const path = require('path');

module.exports = ({ config, isDevelopment }) => webpackConfig => ({
  ...webpackConfig,
  output: {
    path: path.join(config.projectRoot, 'dist'),
    publicPath: isDevelopment ? '/' : config.dist.publicPath,
    filename: isDevelopment
      ? '[name].js'
      : 'script/[name].[contenthash].js',
    chunkFilename: isDevelopment
      ? '[id].js'
      : path.posix.join('script/', '[name].[contenthash].js'),
  },
});
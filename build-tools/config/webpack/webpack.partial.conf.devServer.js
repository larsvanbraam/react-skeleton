module.exports = ({ config }) => webpackConfig => ({
  ...webpackConfig,
  devServer: {
    clientLogLevel: 'info',
    historyApiFallback: true,
    hot: true,
    compress: true,
    host: process.env.HOST || '0.0.0.0',
    port: config.devServer.port,
    disableHostCheck: true,
    open: false,
    quiet: true,
    progress: false,
    overlay: {
      warnings: false,
      errors: true,
    },
    stats: {
      all: false,
    },
    proxy: config.devServer.proxyTable,
    https: config.devServer.useHttps,
  },
});
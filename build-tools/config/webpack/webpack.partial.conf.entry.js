module.exports = () => webpackConfig => ({
  ...webpackConfig,
  entry: {
    app: [
      './src/polyfill/polyfill.ts',
      './src/index.tsx'
    ],
  },
});
const webpackHelpers = require('./webpackHelpers');
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const projectRoot = path.resolve(__dirname, '../../../');
const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = {
  entry: {
    app: [
      path.join(projectRoot, 'src/polyfill/polyfill.js'),
      path.join(projectRoot, 'src/index.tsx'),
    ],
  },
  output: {
    path: path.join(projectRoot, 'dist'),
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[id].js',
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.scss'],
    alias: {
      modernizr$: path.join(projectRoot, '.modernizrrc'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [path.join(projectRoot, 'src')],
        use: [webpackHelpers.getBabelLoaderConfig(isDevelopment)],
      },
      {
        test: /\.modernizrrc$/,
        loader: 'modernizr-loader!json-loader',
      },
      {
        test: /\.ts(x?)$/,
        include: [path.join(projectRoot, 'src')],
        use: [
          webpackHelpers.getBabelLoaderConfig(isDevelopment),
          {
            loader: 'awesome-typescript-loader',
            options: {
              configFileName: path.resolve(projectRoot, './tsconfig.json'),
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'react-svg-loader',
            options: {
              jsx: true,
              svgo: {
                floatPrecision: 2,
                plugins: [
                  {
                    removeTitle: false,
                  },
                ],
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.join(projectRoot, 'src/index.html'),
      filename: './index.html',
    }),
  ],
};

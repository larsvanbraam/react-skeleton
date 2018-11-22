const jsonImporter = require('node-sass-json-importer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = ({ config, isDevelopment }) => webpackConfig => {
  return {
    ...webpackConfig,
    module: {
      rules: [
        /*
         * ------------------------------------------------
         * Styling (scss and css)
         * ------------------------------------------------
         */
        {
          test: /\.scss$/,
          oneOf: (() => {
            function getScssLoaders(cssModules) {
              const loaders = [
                {
                  loader: 'css-loader',
                  options: {
                    sourceMap: isDevelopment,
                    localIdentName: '[local]-[hash:base64:7]',
                    camelCase: true,
                    importLoaders: 2,
                    modules: cssModules,
                  },
                },
                {
                  loader: 'postcss-loader',
                  options: {
                    sourceMap: isDevelopment,
                  },
                },
                {
                  loader: 'sass-loader',
                  options: {
                    importer: jsonImporter(),
                    data: '@import "src/asset/style/utils.scss";',
                    includePaths: ['src/asset/style'],
                    sourceMap: isDevelopment,
                  },
                },
              ];

              if (isDevelopment) {
                loaders.unshift({ loader: 'style-loader' });
              } else {
                loaders.unshift(MiniCssExtractPlugin.loader);
              }

              return loaders;
            }

            return [
              {
                use: getScssLoaders(true),
              },
            ];
          })(),
        },
        /*
         * ------------------------------------------------
         * JavaScript and TypeScript
         * ------------------------------------------------
         */
        ...(() => {
          const babelLoaderConfig = {
            loader: 'babel-loader',
            options: {
              cacheDirectory: isDevelopment,
              plugins: ['react-hot-loader/babel'],
            },
          };

          return [
            {
              test: /\.js$/,
              use: babelLoaderConfig,
              include: [path.join(config.projectRoot, 'src')],
              exclude: /node_modules/,
            },
            {
              test: /\.ts(x?)$/,
              include: [path.join(config.projectRoot, 'src')],
              use: [
                babelLoaderConfig,
                {
                  loader: 'awesome-typescript-loader',
                  options: {
                    configFileName: path.resolve(config.projectRoot, './tsconfig.json'),
                  },
                },
              ],
            },
          ];
        })(),
        /*
         * ------------------------------------------------
         * Images and SVG
         * ------------------------------------------------
         */
        {
          test: /\.(png|jpe?g|gif)(\?.*)?$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 10000,
                name: path.posix.join(
                  isDevelopment ? '' : config.dist.versionPath,
                  'image/[name].[hash:7].[ext]',
                ),
              },
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
        /*
         * ------------------------------------------------
         * Fonts
         * ------------------------------------------------
         */
        {
          test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 10000,
                name: path.posix.join(
                  isDevelopment ? '' : config.dist.versionPath,
                  'font/[name].[hash:7].[ext]',
                ),
              },
            },
          ],
        },
        /*
         * ------------------------------------------------
         * Other
         * ------------------------------------------------
         */
        {
          test: /\.modernizrrc$/,
          loader: 'modernizr-loader!json-loader',
        },
        {
          test: /\.(glsl|txt)$/,
          use: 'raw-loader',
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader',
            },
          ],
        },
      ],
    },
  };
};
const webpack = require('webpack');
const webpackConfig = require('../config/webpack/webpack.prod.config');
const fs = require('fs-extra');
const chalk = require('chalk');

//empty build folder because webpack-cleanup-plugin doesn't remove folders
fs.emptyDirSync(webpackConfig.output.path);

webpack(webpackConfig, function(err, stats) {
  if (err) throw err;
  if (stats.hasErrors()) {
    throw stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false,
      reasons: false,
    }) + '\n';
  }

  process.stdout.write(
    stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false,
      reasons: false,
    }) + '\n',
  );

  console.log();
  console.log(
    chalk.blue('You can preview your build by running:'),
    chalk.blue.bold('yarn preview'),
  );
  console.log(
    chalk.blue('You can analyze your build by running:'),
    chalk.blue.bold('yarn analyze'),
  );
  console.log();
});

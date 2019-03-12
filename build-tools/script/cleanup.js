// https://github.com/shelljs/shelljs
const shell = require('shelljs');
const path = require('path');
const chalk = require('chalk');
const replaceInFile = require('replace-in-file');
const { projectRoot } = require('../config/config');

async function clean() {
  await removeFiles();
  await scaffold();
  await replaceInFiles();
  await prettify();

  // Log that we are done
  console.log(chalk.green('Done.'))
}

async function removeFiles() {
  return new Promise(resolve => {
    console.log(chalk.red('Removing boilerplate code...'));

    shell.rm('-rf', [
      // assets
      path.join(projectRoot, 'src/asset/svg/*'),
      // locales
      path.join(projectRoot, 'static/locale/*'),
      // components
      path.join(projectRoot, 'src/component/*'),
      // pages
      path.join(projectRoot, 'src/page/*'),
      // components
      path.join(projectRoot, 'src/app/component/general/button'),
    ]);

    resolve();
  })
}

async function scaffold() {
  console.log(chalk.blue('Running the seng-generator:'));

  return asyncShell('sg page home');
}

async function prettify() {
  console.log(chalk.blue('prettify the code'));

  return asyncShell('npm run prettify');
}

async function asyncShell(command) {
  return new Promise(resolve => {
    shell.exec(command, resolve);
  })
}

async function replaceInFiles() {
  const configFile = path.join(projectRoot, 'src/config/config.ts');
  const routesFile = path.join(projectRoot, 'src/router/routes.ts');
  const baseFile = path.join(projectRoot, 'src/asset/style/layout/_base.scss');
  const headingFile = path.join(projectRoot, 'src/asset/style/type/_heading.scss');
  const copyFile = path.join(projectRoot, 'src/asset/style/type/_copy.scss');
  const fontFile = path.join(projectRoot, 'src/asset/style/type/_font.scss');
  const variablesFile = path.join(projectRoot, 'src/asset/style/util/_variable.scss');

  await replaceInFile({
    files: configFile,
    from: '[VariableNames.LOCALE_ENABLED]: true',
    to: '[VariableNames.LOCALE_ENABLED]: false'
  });

  await replaceInFile({
    files: configFile,
    from: '[VariableNames.LOCALE_ROUTING_ENABLED]: true,',
    to: '[VariableNames.LOCALE_ROUTING_ENABLED]: false,'
  });

  await replaceInFile({
    files: configFile,
    from: '[PropertyNames.LOCALES]: [\'en\', \'nl\'],',
    to: '[PropertyNames.LOCALES]: [],'
  });

  await replaceInFile({
    files: configFile,
    from: '[PropertyNames.DEFAULT_LOCALE]: \'en\',',
    to: '[PropertyNames.DEFAULT_LOCALE]: \'\','
  });

  await replaceInFile({
    files: routesFile,
    from: '\n' +
      'import Translations from \'../page/Translations\';',
    to: ''
  });

  await replaceInFile({
    files: routesFile,
    from: '\n' +
      '  TRANSLATIONS = \'translations\',',
    to: ''
  });

  await replaceInFile({
    files: routesFile,
    from: `
  {
    name: RouteName.TRANSLATIONS,
    path: '/translations',
    component: Translations,
    exact: true,
  },`,
    to: ''
  });

  await replaceInFile({
    files: [headingFile, copyFile, fontFile],
    from: /(.)/g,
    to: '',
  })

  await replaceInFile({
    files: variablesFile,
    from: [
      '$fontRoboto: \'Roboto\', sans-serif;',
      '$gridSize: 0.8rem',
      '$gutterSize: $gridSize * 2;',
      '$colorPrimary: #61dafb;',
    ],
    to: '',
  })

  await replaceInFile({
    files: baseFile,
    from: 'font-family: $fontRoboto;',
    to: '',
  })
}

clean();

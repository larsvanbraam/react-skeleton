<p align="center">
    <img width="125" src="https://raw.githubusercontent.com/wiki/larsvanbraam/react-skeleton/logo.png?v=2" alt="React skeleton" />
</p>
<h3 align="center">react-skeleton</h3>


## About
React skeleton comes packaged with a variety of tools for creating a SPA. The skeleton allows to get up and running in a matter of minutes.

## Features
* [webpack](https://github.com/webpack/webpack)
* [react](https://github.com/facebook/react)
* [react-router](https://github.com/ReactTraining/react-router)
* [react-hot-loader](https://github.com/gaearon/react-hot-loader)
* [scss](https://github.com/sass/sass)
* [css-modules](https://github.com/css-modules/css-modules) 
* [seng-scss](https://github.com/mediamonks/seng-scss)  
* [typescript](https://github.com/Microsoft/TypeScript)
* [seng-generator](https://github.com/mediamonks/seng-generator)
* [seng-config](https://github.com/mediamonks/seng-config)
* [autoprefixer](https://github.com/mediamonks/seng-scss)
* [airbnb coding standard](https://github.com/airbnb/javascript) (integrated with [eslint](https://github.com/eslint/eslint)/[tslint](https://github.com/palantir/tslint))
* [modernizr](https://github.com/Modernizr/Modernizr)
* [prettier](https://prettier.io/)
* [Image optimization](https://github.com/Klathmon/imagemin-webpack-plugin)
* [SVG support](https://github.com/jhamlet/svg-react-loader)
* [stylelint](https://github.com/stylelint/stylelint) + [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard)
* versioning
* (build) preview server (gzip enabled)
* https support

## Setup
After cloning this repos and removing the .git folder, run:

```bash
yarn
```

This boilerplate comes with some sample pages, blocks and components. If you don't need them in your project, you can remove them all with a simple command:

```bash
yarn clean
```

### Config
The most basic settings can be found and changed in build-tools/config/index.js.

### Development
To run the dev server run:

```bash
yarn dev
```

## Creating pages and components
With [seng-generator](https://github.com/mediamonks/seng-generator) you're able to create pages, blocks and components with the CLI. The seng-generator needs to be installed globally.

```bash
yarn add -g seng-generator
```

The easiest way to use it is by using the wizard

```bash
sg wizard
```

Starts a wizard to create a component or page.


## Build
To build your code run:

```bash
yarn build
```

The code is outputted in `/dist`.

To preview the build in the browser, run:

```bash
yarn preview
```
To analyze the created bundle, run:

```bash
yarn analyze
```


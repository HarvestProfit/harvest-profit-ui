<div style="text-align: center">
  <img src="https://www.harvestprofit.com/logo.png" alt="Harvest Profit"></img>
</div>

[![npm](https://img.shields.io/npm/v/harvest-profit-ui.svg)](https://www.npmjs.com/package/harvest-profit-ui)  [![Build Status](https://travis-ci.org/HarvestProfit/harvest-profit-ui.svg?branch=master)](https://travis-ci.org/HarvestProfit/harvest-profit-ui) [![Coverage Status](https://coveralls.io/repos/github/HarvestProfit/harvest-profit-ui/badge.svg?branch=master)](https://coveralls.io/github/HarvestProfit/harvest-profit-ui?branch=master) [![npm](https://img.shields.io/npm/l/harvest-profit-ui.svg)](https://github.com/HarvestProfit/harvest-profit-ui/blob/master/LICENSE.md)

A collection of React components used by [Harvest Profit](https://www.harvestprofit.com) to rapidly prototype new ideas without re-inventing the wheel.

Check out the [docs](https://harvestprofit.github.io/harvest-profit-ui/)!

## Installation
You can install this via [NPM](https://www.npmjs.com/):
```bash
npm install harvest-profit-ui
```
Or [Yarn](https://yarnpkg.com/en/):
```bash
yarn add harvest-profit-ui
```

## Usage
### Javascript
Each component is actually exported from the main package, so you would simply do
the following:

```js static
import { Button, InputString } from 'harvest-profit-ui';
```

### Styles
You will need something to compile SASS, like [webpack](https://webpack.js.org/) with [sass-loader](https://github.com/webpack-contrib/sass-loader).

Styles are SCSS files contained separately from the code. You'll have to import those yourself, either in a SASS file, like so:
```scss
// Import from the node modules directory directly
@import './node_modules/harvest-profit-ui/scss/index';

// Import after setting up webpack (or other build method) with node_modules included
@import 'harvest-profit-ui/scss/index';
```
Or you can require it in a bundled Javascript file (when using webpack or other build tool with SASS):
```js static
// Using ES6 "import"
import 'harvest-profit-ui/scss/index.scss';

// Using "require" syntax
require('harvest-profit-ui/scss/index.scss');
```

You can overwrite the default variables by looking at the [`_variables.scss`](https://github.com/HarvestProfit/harvest-profit-ui/blob/master/scss/_variables.scss) file, and creating the variables ahead of time, when using your own SCSS file:
```scss
/* my-styles.scss */

// Define "blue" before the import
$blue: #3d87bf;

// Anything "blue" will use the new "blue"
@import 'harvest-profit-ui/scss/index';
```

## Documentation
The documentation for this project can be found [here](https://harvestprofit.github.io/harvest-profit-ui/).

## Development
This project uses [React Styleguidist](https://react-styleguidist.js.org/) for documentation. While developing, you may find it useful to preview your components. You can do so by running the development server with:
```bash
yarn run styleguide
```

To deploy a new version to NPM, bump the version number, commit/merge to `master`, and run the following:
```bash
yarn run clean
yarn run build

# Either NPM
npm publish
# Or Yarn, they do the same thing
yarn publish
```

## License
This project is [MIT licensed](https://github.com/HarvestProfit/harvest-profit-ui/blob/master/LICENSE.md)

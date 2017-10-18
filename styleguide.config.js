const path = require('path');
const {
  babel,
  createConfig,
  match,
  postcss,
  sass,
} = require('webpack-blocks');

module.exports = {
  assetsDir: 'assets',
  title: 'Harvest Profit UI',
  showUsage: true,
  skipComponentsWithoutExample: true,
  template: 'assets/template.html',
  require: [
    path.join(__dirname, 'scss/index.scss'),
  ],
  sections: [
    {
      name: 'Introduction',
      content: 'README.md',
    },
    {
      name: 'UI Components',
      components: 'src/*.{js,jsx}',
    },
    {
      name: 'Form Components',
      components: 'src/forms/*.{js,jsx}',
    },
  ],
  webpackConfig: createConfig([
    babel(),
    match('*.scss', [
      postcss(),
      sass(),
    ]),
  ]),
};

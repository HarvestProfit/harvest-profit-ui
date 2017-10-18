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
  showCode: true,
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
      components: 'src/!(index).{js,jsx}',
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

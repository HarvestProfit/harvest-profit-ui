const path = require('path');
const {
  babel,
  createConfig,
  file,
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
      name: 'Layout',
      components: 'src/layout/*.{js,jsx}',
    },
    {
      name: 'UI',
      components: 'src/*.{js,jsx}',
    },
    {
      name: 'Forms',
      components: 'src/forms/*.{js,jsx}',
    },
  ],
  webpackConfig: createConfig([
    babel(),
    match('*.scss', [
      postcss(),
      sass(),
    ]),
    match(['*.eot', '*.svg', '*.ttf', '*.woff', '*.woff2'], [
      file(),
    ]),
  ]),
};

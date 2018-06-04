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
  template: {
    favicon: 'https://www.harvestprofit.com/favicon.ico',
  },
  require: [
    path.join(__dirname, 'scss/index.scss'),
  ],
  sections: [
    {
      name: 'Introduction',
      content: 'README.md',
    },
    {
      name: 'Page Design',
      content: 'PageDesign.md',
    },
    {
      name: 'Layout',
      components: 'src/layout/*.{js,jsx}',
    },
    {
      name: 'Form Layouts',
      components: 'src/forms/*.{js,jsx}',
    },
    {
      name: 'Inputs',
      components: 'src/inputs/*.{js,jsx}',
    },
    {
      name: 'Dropdowns',
      components: 'src/dropdowns/*.{js,jsx}',
    },
    {
      name: 'Dropdown Extensions',
      components: 'src/dropdown_extensions/*.{js,jsx}',
    },
    {
      name: 'Tables',
      components: 'src/table/*.{js,jsx}',
    },
    {
      name: 'Modals',
      components: 'src/modal/*.{js,jsx}',
    },
    {
      name: 'Panels',
      components: 'src/panel/*.{js,jsx}',
    },
    {
      name: 'Misc',
      components: 'src/misc/*.{js,jsx}',
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

module.exports = {
  presets: [
    'babel-preset-airbnb',
    '@babel/react',
  ],
  plugins: [
    [
      '@babel/plugin-proposal-class-properties',
      {
        loose: true,
      },
    ],
  ],
};

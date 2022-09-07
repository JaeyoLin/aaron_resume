const { override, addWebpackAlias, overrideDevServer } = require('customize-cra');
const path = require('path');

module.exports = {
  webpack: override(
    addWebpackAlias({
      ['@Assets']: path.resolve(__dirname, 'src/Assets'),
      ['@Components']: path.resolve(__dirname, 'src/Components'),
      ['@Pages']: path.resolve(__dirname, 'src/Pages'),
      ['@Routes']: path.resolve(__dirname, 'src/Routes'),
      ['@Utils']: path.resolve(__dirname, 'src/Utils'),
    }),
  ),
};

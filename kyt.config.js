// Base kyt config.
// Edit these properties to make changes.

module.exports = {
  debug: true,
  modifyWebpackConfig: (baseConfig, options) => {
    const babelLoader = baseConfig.module.rules.find(rule => rule.loader === 'babel-loader');
    babelLoader.options.presets.push('@babel/preset-react');
    return baseConfig;
  },
};

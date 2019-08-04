module.exports = function(api) {
  api.cache.using(() => process.env.NODE_ENV);

  return {
    plugins: [
      'babel-plugin-transform-typescript-metadata',
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      ['@babel/plugin-proposal-class-properties', { loose: true }],
      'macros',
    ],
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            node: true,
          },
        },
      ],
      '@babel/typescript',
    ],
  };
};

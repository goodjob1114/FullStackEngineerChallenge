module.exports = function(api) {
  api.cache.using(() => process.env.NODE_ENV);

  return {
    plugins: ['macros'],
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

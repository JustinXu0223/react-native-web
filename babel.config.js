module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['module-resolver', {
      alias: {
        assets: './src/assets',
        components: './src/components',
        config: './src/config',
        constants: './src/constants',
        models: './src/models',
        pagesRn: './src/pagesRn',
        pagesWeb: './src/pagesWeb',
        services: './src/services',
        utils: './src/utils',
      },
    }],
  ],
};

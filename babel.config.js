
const {
  NODE_ENV,
  IS_WEB,
} = process.env;

const isDev = NODE_ENV !== 'production';

let presets = [];

let env = {};

let plugins = [
  ['@babel/plugin-proposal-decorators', { legacy: true }],
  ['module-resolver', {
    alias: {
      assets: './src/assets',
      components: './src/components',
      config: './src/config',
      constants: './src/constants',
      library: './src/library',
      mock: './src/mock',
      models: './src/models',
      pagesRn: './src/pagesRn',
      pagesWeb: './src/pagesWeb',
      services: './src/services',
      theme: './src/theme',
      utils: './src/utils',
    },
  }],
];

if (IS_WEB) {
  presets = [
    ...presets,
    [
      '@babel/preset-env', {
        modules: false,
        targets: {
          browsers: [
            'last 2 versions',
            'safari >= 7',
          ],
        },
      },
    ],
    '@babel/preset-react',
  ];
  env = {
    ...env,
    development: {},
    production: {
      plugins: [
        ['transform-react-remove-prop-types', {
          ignoreFilenames: ['node_modules'],
        }],
      ],
    },
  };
  plugins = [
    ...plugins,
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-syntax-import-meta',
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    '@babel/plugin-proposal-json-strings',
    '@babel/plugin-proposal-function-sent',
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-proposal-numeric-separator',
    '@babel/plugin-proposal-throw-expressions',
    ['@babel/plugin-transform-runtime'],
    ['import', { libraryName: 'antd-mobile', style: true }],
    ['babel-plugin-styled-components', { displayName: isDev, fileName: isDev }],
  ];
} else {
  presets = [
    'module:metro-react-native-babel-preset',
    ...presets,
  ];
  plugins = [
    ...plugins,
    ['import', { libraryName: 'antd-mobile-rn' }],
  ];
}

module.exports = {
  presets,
  env,
  plugins,
};

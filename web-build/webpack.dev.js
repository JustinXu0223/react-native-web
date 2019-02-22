const merge = require('webpack-merge');
const webpack = require('webpack');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const base = require('./webpack.base.js');
const utils = require('./webpack.util.js');

const port = 8088;

const plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NamedModulesPlugin(),
  new OpenBrowserPlugin({ url: `http://localhost:${port}` }),
];

const {
  OUTPUT_DIR = '',
  BUNDLE,
} = process.env;

if (BUNDLE) {
  plugins.push(
    new BundleAnalyzerPlugin(),
  );
}

module.exports = merge(base, {
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'eslint-loader',
            options: {
              configFile: './.eslintrc',
            },
          },
        ],
      },
    ],
  },
  plugins,
  devServer: {
    headers: { 'Access-Control-Allow-Origin': '*' },
    contentBase: utils.resolvePath(OUTPUT_DIR),
    publicPath: '/',
    clientLogLevel: 'error',
    hot: true,
    historyApiFallback: true,
    inline: true, // 实时刷新
    // https: true,
    host: '0.0.0.0',
    port,
    proxy: {
      '/api/**': {
        target: 'https://userapi01-cf.bzzys.com/api/',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});

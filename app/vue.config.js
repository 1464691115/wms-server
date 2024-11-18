const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

const webpack = require('webpack');

module.exports = {
  devServer: {
    port: 20003,
    proxy: {
      '/basic-api': {
        target: 'http://82.156.13.216:6002',
        // target: 'http://localhost:6002',
        changeOrigin: true,
        pathRewrite: { '^/basic-api': '' },
      },
    },
  },
  productionSourceMap: false,
  outputDir: resolve('dist'),
  publicPath: './',
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('image', resolve('src/image'))
      .set('style', resolve('src/style'));
  },
  configureWebpack: {
    plugins: [new webpack.DefinePlugin({})],
  },
};

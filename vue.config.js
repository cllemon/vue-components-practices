const name = require('./package.json').name;
const IS_PROD = process.env.NODE_ENV === 'production';

module.exports = {
  publicPath: IS_PROD ? `/${name}/` : '/',
  productionSourceMap: false,
  chainWebpack: (config) => {
    config.module
      .rule('md')
      .test(/\.md/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-markdown-loader')
      .loader('vue-markdown-loader/lib/markdown-compiler')
      .options({
        raw: true,
      });
  },
};

module.exports = {
  devServer: {
    port: 8888
  },
  configureWebpack: {
    resolve: {
      alias: { 
        'assets': '@/assets',
        'components': '@/components',
        'common': '@/common',
        'network': '@/network',
        'views': '@/views',
      }
    }
  },
  lintOnSave: false
}
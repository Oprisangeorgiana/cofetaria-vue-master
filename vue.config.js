const path = require('path')
module.exports = {
  chainWebpack: config => {
    config.resolve.alias.set('assets', path.resolve(__dirname, 'src/assets'))
    config.resolve.alias.set('components', path.resolve(__dirname, 'src/components'))
    config.resolve.alias.set('data', path.resolve(__dirname, 'src/data'))
    config.resolve.alias.set('pages', path.resolve(__dirname, 'src/pages'))
    config.resolve.alias.set('router', path.resolve(__dirname, 'src/router'))
    config.resolve.alias.set('store', path.resolve(__dirname, 'src/store'))
    config.resolve.alias.set('repository', path.resolve(__dirname, 'src/repository'))
    config.resolve.alias.set('js-store', path.resolve(__dirname, 'node_modules/store'))
  }
}

const webpack = require('webpack')

const assetPrefix = ''

module.exports = {
  exportPathMap: () => ({
    '/': { page: '/' },
    '/tournament': { page: '/tournament' },
    '/about': { page: '/about' },
  }),
  assetPrefix: assetPrefix
}
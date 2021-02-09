// webpack.config.js
const path = require('path')

module.exports = {
  resolve: {
    alias: {
      js: path.resolve('resources/js'),
    },
  },
}

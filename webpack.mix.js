const mix = require('laravel-mix')
const path = require('path')

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
  .webpackConfig({
    devServer: {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      host: '0.0.0.0',
      port: 8080,
    },
  })
  .options({
    hmrOptions: {
      host: '127.0.0.1',
      port: '8080',
    },
  })
  .ts('resources/js/app.tsx', 'public/js')
  .sass('resources/css/app.scss', 'public/css')
  .options({
    processCssUrls: false,
    postCss: [require('tailwindcss')],
  })
  .alias({
    ziggy: path.resolve('vendor/tightenco/ziggy/dist'),
  })
  .version()
  .webpackConfig(require('./webpack.config.js'))
if (!mix.inProduction()) {
  mix.sourceMaps()
}

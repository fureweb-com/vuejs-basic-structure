const path = require('path')
const _ = require('lodash')
const webpack = require('webpack')
const hasProdArg = _.includes(process.argv, '-p')
const {target, source, fullPath: {bundle}} = require('./settings')

if (hasProdArg) process.env.NODE_ENV = 'production'
else process.env.NODE_ENV = 'development'

let ret = {
  mode: hasProdArg ? 'production' : 'development',
  entry: [`./${source}/boot.js`],
  output: {
    filename: bundle,
    path: path.resolve(__dirname, target)
  },
  module: {
    rules: [
      // js파일에 대한 로딩 처리 - templateSrc, styleSrc를 통해 html 및 css 파일을 처리합니다.
      { test: /\.js$/, include: path.resolve(__dirname, source), loader: 'vuejs-loader' },
      { test: /\.vue$/, include: path.resolve(__dirname, source), loader: 'vue-loader' },
      { test: /\.mjs$/, include: path.resolve(__dirname, source), loader: 'babel-loader' },
    ],
  },
  plugins: [new webpack.ProvidePlugin({
    $: "jquery",
    jQuery: "jquery",
    _: "lodash"
  })]
}

// TODO: production인 경우 uglify도 적용
if (process.env.NODE_ENV === 'production') {
  ret.entry.unshift('babel-polyfill')
  ret.module.rules.push({
    test: /\.js$/,
    exclude: /(node_modules|bower_components|lib)/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['es2015'],
      }
    }
  })
}

module.exports = ret

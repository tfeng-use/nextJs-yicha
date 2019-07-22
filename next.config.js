/* eslint-disable */
const withCss = require('@zeit/next-css')
const withLess = require('@zeit/next-less')
const withPlugins = require("next-compose-plugins");
const withTM = require('next-transpile-modules');
const cssLoaderGetLocalIdent = require("css-loader/lib/getLocalIdent.js");

module.exports = withPlugins([withCss, withLess, withTM], {
  transpileModules: ["antd"],
  transpileModules: ["antd-mobile"],
  webpack: (config, { isServer }) => {
    if (isServer) {
      const antStyles = /antd\/.*?\/style\/css.*?/
      const origExternals = [...config.externals]
      config.externals = [
        (context, request, callback) => {
          if (request.match(antStyles)) return callback()
          if (typeof origExternals[0] === 'function') {
            origExternals[0](context, request, callback)
          } else {
            callback()
          }
        },
        ...(typeof origExternals[0] === 'function' ? [] : origExternals),
      ]

      config.module.rules.unshift({
        test: antStyles,
        use: 'null-loader',
      })
    }
    return config
  },
  cssLoaderOptions: {
    localIdentName: "[local]___[hash:base64:5]",
    getLocalIdent: (context, localIdentName, localName, options) => {
      let hz = context.resourcePath.replace(context.rootContext, "");
      if (/node_modules/.test(hz)) {
        return localName;
      } else {
        return cssLoaderGetLocalIdent(
          context,
          localIdentName,
          localName,
          options
        ); 
      }
    }
  },
  cssModules: true
})

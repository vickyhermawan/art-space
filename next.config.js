const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')
const prod = process.env.NODE_ENV === 'production'

module.exports = {
    trailingSlash: true,
    webpack(config, options) {
      config.module.rules.push({
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        use: {
          loader: "file-loader",
          options: {
            publicPath: "/_next/static/sounds/",
            outputPath: "static/sounds/",
            name: "[name].[ext]",
            esModule: false,
          },
        },
      });
  
      return config;
    },
  };

  module.exports = withPWA({
    pwa: {
      disable: prod ? false : true,
      dest: 'public',
      runtimeCaching,
    },
    devIndicators: {
      autoPrerender: false,
    },
    future: { webpack5: true },
  })
const path = require('path')

module.exports = {
  configureWebpack: {
      devtool: 'source-map',
      resolve: {
        alias: {
          svg: path.resolve(__dirname, `src/svg`),
          api: path.resolve(__dirname, `src/api`),
          components: path.resolve(__dirname, `src/components`),
          styles: path.resolve(__dirname,`src/styles`)
        }
      }
  },
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .use('vue-svg-loader')
        .loader('vue-svg-loader')
        .options({
          svgo: {
            plugins: [
              {
                removeDoctype: true,
              },
              {
                removeComments: true,
              },
              {
                removeViewBox: false,
              },
              {
                removeDimensions: true,
              },
              {
                removeTitle: true,
              },
            ],
          }
      })
  }
}
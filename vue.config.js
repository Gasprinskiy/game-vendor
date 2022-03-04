module.exports = {
  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: false
    }
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "@/styles/quasar.variables.scss"; @import "@/styles/colorClasses.scss";'
      }
    }
  },
  transpileDependencies: [
    'quasar'
  ]
}

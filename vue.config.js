const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    publicPath: './',
    configureWebpack: {
        externals: {
            //"import * from 'element-ui'" : "window.ElementPlus"
            'vue': 'Vue',
            'element-plus': 'ElementPlus',
        }
    },
})

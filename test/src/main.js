//import { createApp } from 'vue'

//import ElementPlus from 'element-plus'
//import 'element-plus/dist/index.css'


import App from './App.vue'


const app = Vue.createApp(App)

app.use(ElementPlus)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.mount('#app')

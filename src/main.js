import './assets/styles/main.scss'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.config.globalProperties.$getImageUrl = (fileName) => {
    return new URL(`./assets/img/${fileName}`, import.meta.url).href
}

app.mount('#app')

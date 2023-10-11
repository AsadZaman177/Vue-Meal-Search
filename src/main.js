import { createApp } from 'vue'
import router from './routes'
import './style.css'
import App from './App.vue'
import store from './store'


createApp(App)
.use(router)
.use(store)
.mount('#app')

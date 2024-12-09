import './assets/css/tailwind.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from './plugins/axios'

const app = createApp(App)

app.use(router)

app
  .use(axios, {
    baseUrl: process.env.VUE_APP_API_URL,
  })
  .mount('#app')

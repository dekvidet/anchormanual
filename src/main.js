import { createApp } from 'vue'
import { createWebHashHistory, createRouter } from 'vue-router'
import PrimeVue from 'primevue/config'
import store from './store'
import App from './App.vue'
import routes from './routes'
import importValidationRules from './validation'

importValidationRules()

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

createApp(App)
  .use(router)
  .use(PrimeVue, { ripple: true })
  .use(store)
  .mount('#app')

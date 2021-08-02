import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import GoogleAuth from './config/google_oAuth.js'
const gauthOption = {
  clientId: '638389106580-4am8pdgc4oe6jf6iindpnknmjt5lnso5.apps.googleusercontent.com',
  scope: 'profile email',
  prompt: 'select_account'
}

Vue.use(GoogleAuth, gauthOption)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

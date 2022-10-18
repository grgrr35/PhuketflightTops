import Vue from 'vue'
import App from "./App.vue";
import store from "./store";
import router from "./router";

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import "./assets/css/tailwind.css"

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

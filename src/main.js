import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
console.log(1)
console.log(2)
console.log(3)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log(6)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

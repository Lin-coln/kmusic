import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = true


import KUI from '@/libs/KUI'
Vue.mixin(KUI)

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')

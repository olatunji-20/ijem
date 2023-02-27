import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Flutterwave from  'flutterwave-vue-v3'

Vue.use(Flutterwave, { publicKey: 'FLWPUBK_TEST-05dcd4bf0bc42dc3833fedab3ef37019-X' } )

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')

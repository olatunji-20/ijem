import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Flutterwave from  'flutterwave-vue-v3'

Vue.use(Flutterwave, { publicKey: 'FLWPUBK-9ab4036caa9a57736c0f63531d86c832-X' } )

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')

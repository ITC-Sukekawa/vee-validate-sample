import Vue from 'vue'
import VueI18n from 'vue-i18n'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import vuetify from '@/plugins/vuetify'

Vue.config.productionTip = false

// I18n
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: 'ja',
  messages: require('@/assets/lang/ja/message.json'),
})

// Validator
import '@/validator'

new Vue({
  router,
  store,
  i18n,
  vuetify,
  render: (h) => h(App),
}).$mount('#app')

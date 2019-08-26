import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './routers'
import { apolloProvider } from './graphql/apollo'

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  apolloProvider,
  render: h => h(App)
}).$mount('#app')

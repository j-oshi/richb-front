import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './routers'
import { apolloProvider } from './graphql/apollo'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.VUE_APP_GOOGLE_MAP_API,
    libraries: "places" // necessary for places input
  }
});

new Vue({
  router,
  vuetify,
  apolloProvider,
  render: h => h(App)
}).$mount('#app')

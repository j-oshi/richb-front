<template>
  <v-app>
    <div id="app">
      <Header />
      <router-view />
      <Footer />
    </div>
  </v-app>
</template>

<script>
import Header from './components/core/Header'
import Footer from './components/core/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
  data: () => ({
    //
  }),
}
</script>

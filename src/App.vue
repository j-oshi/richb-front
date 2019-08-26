<template>
  <v-app>
    <div id="app">
      <Header />
      <router-view />
    </div>
  </v-app>
</template>

<script>
import Header from './components/core/Header'

export default {
  name: 'App',
  components: {
    Header,
  },
  data: () => ({
    //
  }),
}
</script>

<template>
  <v-app>
    <div>
      <core-header />
      <core-view />
      <core-footer />
    </div>
  </v-app>
</template>

<script>
import Footer from './components/core/Footer'

export default {
  name: 'App',
  components: {
    CoreHeader: () => import('./components/core/Header'),
    CoreView: () => import('./components/core/View'),
    CoreFooter: () => import('./components/core/Footer'),
  },
  data: () => ({
    //
  }),
}
</script>

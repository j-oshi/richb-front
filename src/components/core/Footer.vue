<template>
  <v-footer color="grey darken-4" padless>
    <v-row justify="center" no-gutters>
      <v-col class="grey darken-3 text-center py-4 white--text" cols="12">
        <v-btn v-for="link in links" :key="link" color="white" text rounded class="my-2">{{ link }}</v-btn>
      </v-col>
      <v-col class="grey darken-4 py-4 white--text" cols="12" md="3">
        <subscribe />
      </v-col>
      <v-col class="grey darken-4 py-4 text-center white--text" cols="12">
        {{ new Date().getFullYear() }} —
        <strong>Ri</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>
<script>

export default {
  components: {
    Subscribe: () => import("@/components/Subscribe"),
  },
  data: () => ({
    links: ["Home", "About Us", "Team", "Services", "Blog", "Contact Us"]
  })
};
</script>
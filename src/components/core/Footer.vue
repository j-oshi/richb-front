<template>
  <v-footer color="grey darken-4" padless>
    <v-row justify="center" no-gutters>
      <v-col class="grey darken-3 text-center py-4 white--text" cols="12">
        <v-btn
          color="white"
          text
          rounded
          v-for="(menu, entityId) in menus"
          :key="entityId"
          :to="menu.url.path | slugify"
          class="ml-0 hidden-sm-and-down"
        >{{ menu.label }}</v-btn>
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
import { GET_MAIN_MENU_QUERY } from "@/queries/MainPageLinkQuery";
export default {
  components: {
    Subscribe: () => import("@/components/Subscribe")
  },
  async mounted() {
    this.loading = true;
    let menuData = await this.$apollo.query({ query: GET_MAIN_MENU_QUERY });
    this.menus = menuData.data.menuByName.links.filter(
      link => link.label !== "Inaccessible"
    );
    this.loading = false;
  },
  data: () => ({
     menus: [],
  })
};
</script>
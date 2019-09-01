<template>
  <div>
    <v-toolbar color="grey darken-4" dark>
      <v-app-bar-nav-icon 
        class="d-sm-flex d-md-none"
        @click.stop="drawer = !drawer"
      />
      <v-container mx-auto py-0>
        <v-layout>
          <v-toolbar-title>Title</v-toolbar-title>
          <div class="flex-grow-1"></div>
          <v-toolbar-items>
            <v-btn
              text
              v-for="(menu, entityId) in menus"
              :key="entityId"
              :to="menu.entityLabel | slugify"
              class="ml-0 hidden-sm-and-down"
              @click="onClick($event, menu.entityLabel)"
            >{{ menu.entityLabel }}</v-btn>
          </v-toolbar-items>
        </v-layout>
      </v-container>
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>John Leider</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item               
            v-for="(menu, entityId) in menus"
            :key="entityId"
            :to="menu.entityLabel | slugify">
          <v-list-item-icon>
            <!-- <v-icon>{{ item.icon }}</v-icon> -->
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ menu.entityLabel }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { GET_MAIN_MENU_QUERY } from "@/queries/MainPageLinkQuery"

export default {
  name: "GraphQLMenu",
  data() {
    return {
      drawer: null,
      menus: []
    };
  },
  async mounted() {
    this.loading = true;
    let menuData = await this.$apollo.query({ query: GET_MAIN_MENU_QUERY });
    this.menus = menuData.data.nodeQuery.entities;
    this.loading = false;
  },
  methods: {
    onClick(e, item) {
      e.stopPropagation();
      if (item.to || !item.href) return;
      this.$vuetify.goTo(item.href);
    }
  },
  filters: {
    slugify: function(text) {
      let home = text === 'Home' ? '/' : text
      return home === "/" ? home : home
        .toString()
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, '')
        .replace(/--+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '')
    }
  }
};
</script>
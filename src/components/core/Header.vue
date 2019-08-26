<template>
  <div>
    <v-toolbar
      color="blue-grey darken-4"
      dark
    >
      <!-- <v-app-bar-nav-icon 
        class="d-sm-flex d-md-none"
        @click="toggleDrawer"
      /> -->
      <v-container
        mx-auto
        py-0
      >
        <v-layout>
          <v-toolbar-title>Title</v-toolbar-title>
          <div class="flex-grow-1"></div>
          <!-- <v-btn
            v-for="(link, i) in links"
            :key="i"
            :to="link.to"
            class="ml-0 hidden-sm-and-down"
            flat
            @click="onClick($event, item)"
          >
            {{ link.text }}
          </v-btn> -->
          <v-toolbar-items>
            <v-btn text>Link 1</v-btn>
            <v-btn text>Link 2</v-btn>
            <v-btn text>Link 3</v-btn>
          </v-toolbar-items>
          <template v-if="$vuetify.breakpoint.smAndUp">
            <v-btn icon>
              <v-icon>mdi-plus-circle</v-icon>
            </v-btn>
          </template>
        </v-layout>
      </v-container>
    </v-toolbar>
  </div>
</template>

<script>
  import { GET_MAIN_MENU_QUERY } from '@/queries/MainPageLinkQuery'
  export default {
    name: 'GraphQLMenu',
    data () {
      return {
        users: []
      }
    },
    async mounted () {
      this.loading = true
      console.log(process.env.VUE_APP_GRAPHQL_ENDPOINT)
      const menus = await this.$apollo.query({ query: GET_MAIN_MENU_QUERY })
      console.log(menus.data.nodeQuery.entities)
      this.loading = false
    }  
    // methods: {
    //   onClick (e, item) {
    //     e.stopPropagation()

    //     if (item.to || !item.href) return

    //     this.$vuetify.goTo(item.href)
    //   }
    // }
  }
</script>
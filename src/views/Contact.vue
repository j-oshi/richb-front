<template>
  <v-content>
    <v-container id="page" mx-auto ma-0 pa-0 px-2>
      <v-row justify="center">
        <v-col cols="12">
          <p class="headline">Contact</p>
        </v-col>
        <v-col cols="6">
          <Address v-if="locations.length > 0" :locations="locations"/>
        </v-col>
        <v-col cols="6">
          <Contact />
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import { GET_FRONT_PAGE_QUERY } from "@/queries/FrontPageQuery";

export default {
  name: "ContactPage",
  components: {
    Contact: () => import("@/components/ContactUs"),
    Address: () => import("@/components/paragraph/Address")
  },
  data() {
    return {
      locations: [],
    };
  },
  async mounted() {
    this.loading = true;
    let paraData = await this.$apollo.query({ query: GET_FRONT_PAGE_QUERY });
    let queryData = paraData.data.nodeById;
    this.title = queryData.title;
    this.locations = queryData.paragraphs.filter(
      type => type.entity.__typename === "ParagraphContactUs"
    );
  }
};
</script>

<style scoped>
#page {
  max-width: 960px;
  min-height: calc(100vh - 172px);
}
</style>
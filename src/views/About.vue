<template>
  <v-content>
    <v-container id="page" mx-auto ma-0 pa-0 px-2>
      <v-row justify="top">
        <v-col cols="12">
          <p v-if="title !== ''" class="headline">{{ title }}</p>
          <picture-grid v-if="pictureList.length > 0" :pictures="pictureList"/>
          <text-picture v-if="pictureAndText.length > 0" :textcontents="pictureAndText"/>
          <two-text v-if="twoCol.length > 0" :twoCols="twoCol"/>
          <Address v-if="locations.length > 0" :locations="locations"/>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import { GET_PAGE_QUERY } from "@/queries/PageQuery";

export default {
  name: "About",
  components: {
    PictureGrid: () => import("@/components/paragraph/PictureGrid"),
    TextPicture: () => import("@/components/paragraph/TextPicture"),
    TwoText: () => import("@/components/paragraph/TwoColText"),
    Address: () => import("@/components/paragraph/Address")
  },
  data() {
    return {
      path: this.$route.path,
      title: "",
      pictureList: [],
      pictureAndText: [],
      twoCol: [],
      locations: []
    };
  },
  async mounted() {
    this.loading = true;
    let paraData = await this.$apollo.query({
      query: GET_PAGE_QUERY,
      variables: {
        path: this.path
      }
    });

    let queryData = paraData.data.route.entity;
    this.title = queryData.entityLabel;
    if (queryData.paragraphs.length > 0) {
      let picture = queryData.paragraphs.filter(type => type.entity.__typename === "ParagraphProduct");
      this.pictureList = picture['0'].entity.products;
      this.pictureAndText = queryData.paragraphs.filter(type => type.entity.__typename === "ParagraphContentAndLink");
      this.twoCol = queryData.paragraphs.filter(type => type.entity.__typename === "ParagraphTwoCol");
      let locations = queryData.paragraphs.filter(type => type.entity.__typename === "ParagraphContactUs");
    }
  }
};
</script>

<style scoped>
#page {
  /* max-width: 960px; */
  min-height: calc(100vh - 172px);
}
</style>
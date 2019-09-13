<template>
  <v-content>
    <v-container id="page" mx-auto ma-0 pa-0 px-2>
      <v-row justify="center">
        <v-col cols="12">
          <p v-if="title !== ''" class="headline" mx-2 my-0 py-0>{{ title }}</p>
          <Carousel :mediaItems="mediaData"/>
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
import { GET_MEDIA_QUERY } from "@/queries/MediaQuery";
import { GET_FRONT_PAGE_QUERY } from "@/queries/FrontPageQuery";

export default {
  name: "FrontPage",
  components: {
    Carousel: () => import('@/components/Carousel'),
    PictureGrid: () => import('@/components/paragraph/PictureGrid'),
    TextPicture: () => import('@/components/paragraph/TextPicture'),
    TwoText: () => import('@/components/paragraph/TwoColText'),
    Address: () => import('@/components/paragraph/Address'),
  },
  data() {
    return {
      title: '',
      pictureList: [],
      pictureAndText: [],
      twoCol: [],
      locations: [],
      mediaData: [],
    };
  },
  async mounted() {
    let mediaQuery = await this.$apollo.query({ query: GET_MEDIA_QUERY });
    this.mediaData = mediaQuery.data.nodeById.fieldMedia;
    this.loading = true;
    let paraData = await this.$apollo.query({ query: GET_FRONT_PAGE_QUERY });
    let queryData = paraData.data.nodeById;
    this.title = queryData.title;
    let picture = queryData.paragraphs.filter(type => type.entity.__typename === "ParagraphProduct");
    this.pictureList = picture['0'].entity.products;
    this.pictureAndText = queryData.paragraphs.filter(type => type.entity.__typename === "ParagraphContentAndLink");
    this.twoCol = queryData.paragraphs.filter(type => type.entity.__typename === "ParagraphTwoCol");
    this.locations = queryData.paragraphs.filter(type => type.entity.__typename === "ParagraphContactUs");
  }
};
</script>

<style scoped>
#page {
  /* max-width: 960px; */
  min-height: calc(100vh - 172px);
}
</style>
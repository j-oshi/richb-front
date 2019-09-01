<template>
  <v-content>
    <v-container mx-auto ma-0 pa-0 fill-height>
      <v-row justify="center">
        <v-col cols="12">
          <p v-if="title !== ''" class="headline">{{ title }}</p>
          <PictureGrid />
          <TextPicture />
          <TwoColText />
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import { GET_FRONT_PAGE_QUERY } from "@/queries/FrontPageQuery";
import PictureGrid from "@/components/paragraph/PictureGrid";
import TextPicture from "@/components/paragraph/TextPicture";
import TwoColText from "@/components/paragraph/TwoColText";

export default {
  name: "FrontPage",
  components: {
    PictureGrid,
    TextPicture,
    TwoColText
  },
  data() {
    return {
      title: '',
      menus: []
    };
  },
  async mounted() {
    this.loading = true;
    let paraData = await this.$apollo.query({ query: GET_FRONT_PAGE_QUERY });
    let queryData = paraData.data.nodeById;
    this.title = queryData.title;
    console.log(queryData);
  }
};
</script>

<style scoped>
/* .container {
  max-width: 960px;
} */
</style>
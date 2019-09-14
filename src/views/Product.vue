<template>
  <v-content>
    <v-container id="page" mx-auto ma-0 pa-0 px-2>
      <v-row justify="center">
        <v-col cols="12">
          <p v-if="product.title !== ''" class="headline" mx-2 my-0 py-0>{{ title }}</p>
          <v-img
            v-if="url !== ''"
            :src="url"
            :lazy-src="url"
            aspect-ratio="1"
            class="grey lighten-2"
            max-width="500"
            max-height="300"
          ></v-img>
          <div v-html="value"> </div>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import { GET_PRODUCT_QUERY } from "@/queries/ProductQuery";

export default {
  name: "FrontPage",
  data() {
    return {
      path: this.$route.path,
      title: "",
      url: "",
      value: "",
      product: [],
    };
  },
  async mounted() {
    this.loading = true;
    let productData = await this.$apollo.query({
      query: GET_PRODUCT_QUERY ,
      variables: {
        path: this.path
      }
    });  
    this.title = productData.data.route.entity.title;
    this.url = productData.data.route.entity.fieldProductImage.url;
    this.value = productData.data.route.entity.body.value;
    this.loading = true;
  }
};
</script>

<style scoped>
#page {
  /* max-width: 960px; */
  min-height: calc(100vh - 172px);
}
</style>
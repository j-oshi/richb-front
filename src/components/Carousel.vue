<template>
  <v-carousel
    cycle 
  >
    <v-carousel-item
      v-for="(item,i) in mediaItems"
      :key="i"
      :src="item.entity.media.entity.thumbnail.large.url"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    name: "Carousel",
    props: ["mediaItems"],
  }
</script>
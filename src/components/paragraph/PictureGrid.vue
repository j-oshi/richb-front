<template>
  <v-row>
    <v-col>
      <v-card>
        <v-container fluid>
          <v-row>
            <v-col
              v-for="(picture, i) in pictures"
              :key="i"
              class="d-flex child-flex"
              cols="6"
              sm="3"
              md="2"
            >
              <v-card flat tile class="d-flex mx-1">
                <v-img
                  :src="picture.entity.image.large.url"
                  :lazy-src="`https://picsum.photos/10/6?image`"
                  aspect-ratio="1"
                  class="grey lighten-2"
                >
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    props: ['pictures'],
  }
</script>
<template>
  <v-container class="pa-0" fluid>
    <v-row>
      <v-col v-for="(item, i) in twoCols" :key="i">
        <v-card dark>
          <v-list-item three-line>
            <v-list-item-content class="align-self-start">
              <v-list-item-title class="headline mb-2" v-text="item.entity.title"></v-list-item-title>
              <v-list-item-subtitle>
                <div v-html="item.entity.text.value"> </div>
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-card-actions>
            <div class="flex-grow-1"></div>
            <v-btn text>Button</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    props: ['twoCols'],  
    data: () => ({
      items: [
        {
          color: "#1F7087",
          src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
          title: "Supermodel",
          artist: "Foster the People"
        },
        {
          color: "#952175",
          src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
          title: "Halcyon Days",
          artist: "Ellie Goulding"
        }
      ]
    })
  };
</script>
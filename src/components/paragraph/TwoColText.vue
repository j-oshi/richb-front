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
  };
</script>
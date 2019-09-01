<template>
  <v-container class="pa-0" fluid>
    <v-row>
      <v-col v-for="(textpic, i) in textcontents" :key="i">
        <v-card dark>
          <v-list-item three-line>
            <v-list-item-avatar size="125" tile>
              <v-img :src="textpic.entity.image.image.url"></v-img>
            </v-list-item-avatar>
            <v-list-item-content class="align-self-center">
              <v-list-item-subtitle>
                <div v-html="textpic.entity.text.value"> </div>
              </v-list-item-subtitle>
              <v-card-actions>
                <div class="flex-grow-1"></div>
                <v-btn text>Button</v-btn>
              </v-card-actions>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: ['textcontents'],  
};
</script>
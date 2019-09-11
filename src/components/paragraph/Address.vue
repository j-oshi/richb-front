<template>
  <v-row>
    <v-col
      v-for="(address, i) in locations"
      :key="i"
    >
      <v-card>
        <v-card-text>
          <span class="text--primary">
            <span>{{ address.entity.address.addressLine1 }}</span><br>
            <span>{{ address.entity.address.locality }}</span><br>
            <span>{{ address.entity.address.postalCode }}</span>
          </span>
        </v-card-text>
        <google-map :coordinates="address.entity.Coordinates" />
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import GoogleMap from "@/components/Map";
export default {
  props: ["locations"],
  components: {
    GoogleMap
  }
};
</script>
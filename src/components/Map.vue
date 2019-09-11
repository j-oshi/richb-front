<template>
  <div>
    <gmap-map :center="{ lat: coordinates.lat, lng: coordinates.lon }" :zoom="15" style="width:100%;  height: 400px;">
      <gmap-marker
        :position="{ lat: coordinates.lat, lng: coordinates.lon }"
      ></gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
  export default {
    name: "GoogleMap",
    props: ["coordinates"],
  };
</script>
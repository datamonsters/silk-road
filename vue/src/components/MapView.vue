<template>
  <div class="maparea" id="map">
    <mapbox access-token="pk.eyJ1IjoidW5xbyIsImEiOiJjam4xOWF2am4zdXFsM3ZwbndiMG8xN2czIn0.NFCL-490i2MfWkmcG5xkWw"
        :map-options="{
  style: 'mapbox://styles/mapbox/satellite-v9',
  center: [-77.035, 38.875],
  zoom: 12,
}" :scale-control="{
  show: true,
  position: 'top-left'
}" :fullscreen-control="{
  show: true,
  position: 'top-left'
}" @map-load="mapLoaded"></mapbox>
  </div>
</template>

<script lang="ts">
import Mapbox from "mapbox-gl-vue"
import "mapbox-gl"

export default {
  name: "map-view",
  components: { mapbox: Mapbox },
  methods: {
    mapLoaded(map) {
      // map.style.stylesheet.layers.forEach(function(layer) {
      //   if (layer.type === "symbol" || layer.type === "line") {
      //     map.removeLayer(layer.id)
      //   }
      // })

      // map.addLayer({
      //   type: 'line',
      //   source: 'line',
      //   id: 'line',
      //   paint: {
      //     'line-color': 'red',
      //     'line-width': 14,
      //     // 'line-gradient' must be specified using an expression
      //     // with the special 'line-progress' property
      //     'line-gradient': [
      //       'interpolate',
      //       ['linear'],
      //       ['line-progress'],
      //       0, "blue",
      //       0.1, "royalblue",
      //       0.3, "cyan",
      //       0.5, "lime",
      //       0.7, "yellow",
      //       1, "red"
      //     ]
      //   },
      //   layout: {
      //     'line-cap': 'round',
      //     'line-join': 'round'
      //   }
      // });
    }
  }
}
</script>

<style scoped lang="stylus">
  #map {
    /*height: 500px;*/
  }

  .maparea
    height calc(100vh - 52px)

  /*.maparea*/
  /*z-index 1000*/
  /*height 200px*/
  /*width 1000px*/
</style>

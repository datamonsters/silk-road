<template>
  <div  class="maparea" id="map">
    <mapbox access-token="pk.eyJ1IjoidW5xbyIsImEiOiJjam4xOWF2am4zdXFsM3ZwbndiMG8xN2czIn0.NFCL-490i2MfWkmcG5xkWw"
        :map-options="{
  style: 'mapbox://styles/mapbox/satellite-streets-v10',
  center: [-96, 37.8],
  zoom: 3
}" :scale-control="{
  show: true,
  position: 'top-left'
}" :fullscreen-control="{
  show: true,
  position: 'top-left'
}"
        @map-load="mapLoaded">
    </mapbox>
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
      map.style.stylesheet.layers.forEach(function(layer) {
        if (layer.type === "symbol" || layer.type === "line") {
          map.removeLayer(layer.id)
        }
      })
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

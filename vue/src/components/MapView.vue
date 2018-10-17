<template>
  <div class="maparea" id="map">
    <mapbox access-token="pk.eyJ1IjoidW5xbyIsImEiOiJjam4xOWF2am4zdXFsM3ZwbndiMG8xN2czIn0.NFCL-490i2MfWkmcG5xkWw"
        :map-options="{
  style: 'mapbox://styles/mapbox/satellite-v9',
center: [88.486052, 37.830348],
    zoom: 2
}" :scale-control="{
  show: true,
  position: 'top-left'
}" :fullscreen-control="{
  show: true,
  position: 'top-left'
}" @map-load="mapLoaded"></mapbox>
  </div>
</template>

<script>
import Mapbox from "mapbox-gl-vue"
import "mapbox-gl"

export default {
  name: "map-view",
  components: { mapbox: Mapbox },
  methods: {
    mapLoaded(map) {
      this.$f.geo.trafficLayer.on(layer => {
        console.log(layer)
        map.addLayer(layer)
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

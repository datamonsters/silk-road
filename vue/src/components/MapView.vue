<template>
  <div class="maparea" id="map">
    <mapbox :fullscreen-control="fullscreenControl" :map-options="mapOptions" :scale-control="scaleControl"
        @map-load="mapLoaded"
        access-token="pk.eyJ1IjoidW5xbyIsImEiOiJjam4xOWF2am4zdXFsM3ZwbndiMG8xN2czIn0.NFCL-490i2MfWkmcG5xkWw"></mapbox>
  </div>
</template>

<script>
  import Mapbox from "mapbox-gl-vue"
  import "mapbox-gl"

  export default {
    name: "map-view",
    components: { mapbox: Mapbox },
    data: () => ({
      fullscreenControl: {
        show: true,
        position: "top-left"
      },
      mapOptions: {
        style: "mapbox://styles/mapbox/satellite-v9",
        center: [88.486052, 37.830348],
        zoom: 2
      },
      scaleControl: {
        show: true,
        position: "top-left"
      }
    }),
    methods: {
      mapLoaded(map) {
        let geojson = {
          type: "FeatureCollection",
          features: []
        }
        map.addSource("traffic-source", { type: "geojson", data: geojson })
        map.addLayer({
          id: "traffic",
          source: "traffic-source",
          type: "line",
          paint: {
            "line-width": ["get", "width"],
            "line-color": "red"
          },
          layout: {
            "line-cap": "round",
            "line-join": "round"
          }
        })
        this.$f.geo.onMapFeatures.on(features => {

          geojson.features = features
          map.getSource("traffic-source").setData(geojson)
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

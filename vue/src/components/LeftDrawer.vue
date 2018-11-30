<template lang="pug">
  q-list(no-border link inset-delimiter)
    q-inner-loading(:visible="$g.during['api.getTraffic']")
      div please wait {{$f.vars.processDuration.v}} seconds
      q-spinner-gears(size="120px" color="primary" )
    q-list(no-border link inset-delimiter :disabled="$g.during['api.getTraffic']")
      q-list-header Roads
      div
      q-item(tag="label" v-for="road in roads" :key="road[1]")
        q-item-side
          q-checkbox(v-model="road[0]" :disable="$g.during['api.getTraffic']" )
        q-item-main
          q-item-tile(label) {{road[2]}}
          q-item-tile(sublabel) {{road[3]}}
      q-item-separator
      q-list-header Settings
      q-item(v-for="(s,index) in capacity" :key="'s'+s[2]+s[4]"  )
        q-field(orientation="vertical" :label="s[2]" @click="resetCap()")
          q-input.xxx(v-model="s[0]" :suffix="s[3]" :error="s[4]" clearable :clear-value="s[1]")
      q-item-separator
      //q-list-header Type of products
      //q-item(tag="label" v-for="(g,index) in goods" :key="'g'+index" disabled)
        q-item-side
          q-checkbox(v-model="g[0]" disabled)
        q-item-main
          q-item-tile(label) {{g[1]}}

</template>

<script>
import updnQCheckbox from "quasar-framework/src/components/checkbox/QCheckbox"
import QItemMain from "quasar-framework/src/components/list/QItemMain"
import QItemTile from "quasar-framework/src/components/list/QItemTile"
import QItem from "quasar-framework/src/components/list/QItem"
import QInput from "quasar-framework/src/components/input/QInput"
import QField from "quasar-framework/src/components/field/QField"
import QInnerLoading from "quasar-framework/src/components/inner-loading/QInnerLoading"
import QSpinnerGears from "quasar-framework/src/components/spinner/QSpinnerGears"

export default {
  name: "map-drawer",
  components: { QSpinnerGears, QInnerLoading, QField, QInput, QItem, QItemTile, QItemMain, QCheckbox },
  mapFlow: {
    vars: ["roads", "capacity"]
  },
  methods:{
    resetCap(){
      console.log("rest")

    }
  },
  watch: {
    roads(v) {
      this.$f.vars.roadHashPart(v.map(a => a[0] ? 1 : 0).join(""))
    },
    capacity(v) {
      let hash = v.map(a => {
        let vv = parseInt(a[0])
        if (!vv){
          a[4] = true
          a[0] = 1
          setTimeout(()=>{
            a[4] = false
            this.$forceUpdate()
          },700)
          console.log(a)
          return 0
        } else {
          return vv
        }
      }).join("_")
      this.$f.vars.capacityHashPart(hash)
    }
  },
  data() {
    return {
      goods: [
        [false, "Textiles and furniture"],
        [true, "Vegetables, foodstuffs and wood"],
        [true, "Stone and glass"],
        [true, "Minerals"],
        [true, "Metals"],
        [true, "Chemicals and plastics"],
        [true, "Transport vehicles"],
        [true, "Machinery"],
        [true, "Electronics"],
        [true, "Other"]
      ]
    }
  }
}
</script>

<style  lang="stylus">
  .inputfield
    display flex
    flex-direction row

  .map-drawer
    color orange

  .xxx .q-if-addon-right
      margin-left  -150px !important

</style>

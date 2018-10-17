<template lang="pug">
  q-list(no-border link inset-delimiter)
    q-inner-loading(:visible="$a.during['api.get-traffic']")
      div please wait {{$f.settings.maxDur.v}} seconds
      q-spinner-gears(size="120px" color="primary")
    q-list(no-border link inset-delimiter :disabled="$a.during['api.get-traffic']")
      q-list-header Roads
      div
      q-item(tag="label" v-for="road in roads" :key="road[1]")
        q-item-side
          q-checkbox(v-model="road[0]" :disable="$a.during['api.get-traffic']" )
        q-item-main
          q-item-tile(label) {{road[2]}}
          q-item-tile(sublabel) {{road[3]}}
      q-item-separator
      q-list-header Settings
      q-item(v-for="(s,index) in vars" :key="'s'+index" disabled)
        q-field(orientation="vertical" :label="s[2]")
          q-input.xxx(:placeholder="s[1]" v-model="s[0]" :suffix="s[3]")
      q-item-separator
      q-list-header Type of products
      q-item(tag="label" v-for="(g,index) in goods" :key="'g'+index" disabled)
        q-item-side
          q-checkbox(v-model="g[0]" disabled)
        q-item-main
          q-item-tile(label) {{g[1]}}

</template>

<script>
import QCheckbox from "quasar-framework/src/components/checkbox/QCheckbox"
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
    settings: ["roads", "vars"]
  },
  watch: {
    roads(v) {
      this.$a.launch("settings.change-roads", v)
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

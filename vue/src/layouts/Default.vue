<template lang="pug">
  q-layout(view="lHh Lpr lFf")
    q-layout-header
      q-toolbar(color="primary" :glossy="$q.theme === 'mat'" :inverted="$q.theme === 'ios'")
        q-btn(flat dense round aria-label="Menu" icon="mdi-menu")
        q-toolbar-title SilkRoad
          <!--.subtitle v{{  }}-->
    q-layout-drawer(v-model="leftDrawerOpen" :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null")
      map-drawer
    q-page-container
      router-view
</template>

<script>
import { openURL } from "quasar"
import QToolbarTitle from "quasar-framework/src/components/toolbar/QToolbarTitle"
import QCheckbox from "quasar-framework/src/components/checkbox/QCheckbox"
import MapDrawer from "../components/LeftDrawer"
//import QBtn from "quasar-framework/src/components/btn/QBtn"

export default {
  name: "LayoutDefault",
  components: { MapDrawer, QCheckbox, QToolbarTitle },
  //components: {QBtn},
  data() {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>
</style>

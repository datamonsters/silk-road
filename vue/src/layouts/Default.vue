<template lang="pug">
  q-layout(view="lHh Lpr lFf")
    q-layout-header
      q-toolbar(color="primary" :glossy="$q.theme === 'mat'" :inverted="$q.theme === 'ios'")
        q-btn(flat dense round aria-label="Menu" icon="mdi-menu" @click="$f.vars.openDrawer(!leftDrawerOpen)")
        q-toolbar-title SilkRoad
          <!--.subtitle v{{  }}-->
    q-layout-drawer(v-model="leftDrawerOpen" :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null")
      map-drawer
    q-page-container
      router-view

    q-page-sticky( v-if="apply" position="left" :offset="[18, 18]" )
      q-btn( round color="primary" :disable="$g.during['api.getTraffic']"
      @click="$a('api.getTraffic', $f.vars.userHash.v)")
        q-spinner-pie(v-if="$g.during['api.getTraffic']")
        q-icon(v-else name="mdi-check")
</template>

<script>
import { openURL } from "quasar"
import QToolbarTitle from "quasar-framework/src/components/toolbar/QToolbarTitle"
import QCheckbox from "quasar-framework/src/components/checkbox/QCheckbox"
import MapDrawer from "../components/LeftDrawer"
import QBtn from "quasar-framework/src/components/btn/QBtn"
import QPageSticky from "quasar-framework/src/components/layout/QPageSticky"
import QSpinnerPie from "quasar-framework/src/components/spinner/QSpinnerPie"
import QIcon from "quasar-framework/src/components/icon/QIcon"

export default {
  name: "LayoutDefault",
  components: { QIcon, QSpinnerPie, QPageSticky, QBtn, MapDrawer, QCheckbox, QToolbarTitle },
  data() {
    return {
      userOpen: undefined,
      apply: false
    }
  },
  onFlow: {
    "vars.userHash"(v) {
      //console.log(">",v)
      this.apply = !!v
    },
    "vars.openDrawer"(v) {
      this.userOpen = v
    }
  },
  computed: {
    leftDrawerOpen: {
      get() {
        if (this.userOpen === undefined) {
          return this.$q.platform.is.desktop
        } else {
          return this.userOpen
        }
      },
      set(v) {
        this.$f.vars.openDrawer(v)
      }
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>
</style>

<template lang="pug">

  map-view.mv
  //q-field(icon="account_circle" label="High-speed railway traffic"  helper="What's your account name?").inputfield
    q-input(v-model="xx")
</template>

<style>
.mv {
  height: 100%;
}
</style>

<script>
import MapView from "../components/MapView"

export default {
  name: "PageHome",
  components: { MapView }
}
</script>

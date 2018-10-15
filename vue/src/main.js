import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store/index"


import "./styles/quasar.styl"
import "quasar-framework/dist/quasar.ie.polyfills"
import iconSet from "quasar-framework/icons/mdi"
import "quasar-extras/animate"
import "quasar-extras/mdi"
import {
  Quasar,
  QBtn,
  QLayout,
  QLayoutHeader,
  QLayoutDrawer,
  QPage,
  QPageContainer,
  QToolbar,
  QToolbarTitle,
  QList,
  QListHeader,
  QItemSeparator,
  QItem,
  QItemSide,
  QItemMain
} from "quasar"

Vue.use(Quasar, {
  config: {},
  components: {
    QBtn,
    QLayout,
    QLayoutHeader,
    QLayoutDrawer,
    QPage,
    QPageContainer,
    QToolbar,
    QToolbarTitle,
    QList,
    QListHeader,
    QItemSeparator,
    QItem,
    QItemSide,
    QItemMain
  },
  directives: {},
  plugins: {},
  iconSet: iconSet
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")

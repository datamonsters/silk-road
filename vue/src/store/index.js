import Vue from "vue"
import Vuex from "vuex"
import { F, AVue } from "avuef"
import { actions } from "./actions/index"

class Store {
  raw = {
    syncStamp: F.stored.get("api.sync"),
    graph: F.stored
  }
  geo = {
    graph: F.on("raw.graph","geo.initGraph"),
    onMapFeatures: F.on("geo.graph", "traffic.getLastFeatures"),
  }

  //query =  {
  //  lastHash: F.stored
  //}
  vars = {
    openDrawer: F.stored,
    processDuration: F,

    roads: F,
    capacity: F,

    //userRoads: F.stored,
    //userCap: F.stored,

    lastHash: F,
    roadHashPart: F.action("vars.hashPartChange"),
    capacityHashPart: F.action("vars.hashPartChange"),
    userHash: F
  }
  //settings = {
  //  openDrawer: F,
  //  //maxDur: F,
  //  roads: F,
  //  vars: F,
  //  newHash: F,
  //  //changedHash: F
  //}
}

export const avue = new AVue(Store, actions)
Vue.use(avue)


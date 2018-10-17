import Vue from "vue"
import Vuex from "vuex"
import * as avuef from "avuef"
import { actions } from "./actions/index"

const Avue = avuef.AVue
const A = avuef.A

class Store {
  raw = {
    hash: A.f,
    cities: A.f.stored,
    edges: A.f.stored,
    base: A.f
  }
  geo = {
    coordinates: A.f,
    mapEdges: A.f,
    trafficFeatures: A.f
  }
  settings = {
    openDrawer: A.f.stored,
    roads: A.f,
    vars: A.f,

    maxDur: A.f,
    lastHash: A.f,
    newHash: A.f,
  }
}

export const af = new Avue(Store, actions)
export default af
Vue.use(af)
af.kit.on(_ => _.a("api.init"))

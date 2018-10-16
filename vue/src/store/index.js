import Vue from "vue"
import Vuex from "vuex"
import * as avuef from "avuef"
import { actions } from "./actions/index"

const Avue = avuef.AVue
const A = avuef.A

class Store {
  raw = {
    hash: A.f.stored,
    cities: A.f.stored,
    edges: A.f.stored
  }
  geo = {
    coordinates: A.f
  }
}

export const af = new Avue(Store, actions)
export default af
Vue.use(af)
af.kit.on(_ => _.a("api.init"))

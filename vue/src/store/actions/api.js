function coreFlow(cl) {
  cl.x = "wok"
  return cl
}

//const url = "http://localhost:5000"
const url = ""
const get = path =>
  new Promise(done => fetch(url + path).then(_ => _.json().then(done)))
export const api = {
  async init() {
    let hash = await get("/hash")
    let raw = this.f.raw
    if (raw.hash.v !== hash) {
      this.f.raw.hash(hash)
      let r = await Promise.all([get("/cities"), get("/edges")])
      raw.cities(r[0])
      raw.edges(r[1])
      this.a("geo.generate")
    } else {
      this.a("geo.generate")
    }
  },
  async getCites() {
    return {}
  }
}

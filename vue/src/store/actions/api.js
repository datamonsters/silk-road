let url = process.env.NODE_ENV === "development" ? "http://localhost:5000" : ""

export const load = path => {
  console.log("API:/"+path)
  return new Promise(done =>
    fetch(url + path).then(_ =>
      _.json().then(v => {
        //console.log("↓↓↓ loaded", path)
        done(v)
      })
    )
  )
}

export const api = {
  async sync() {
    let {syncStamp, hash, dur} = await load("/sync")

    //let graph = this.f.raw.graph.v
    this.f.vars.processDuration(Math.round(Math.max(...dur)))
    if (this.f.raw.syncStamp.v !== syncStamp) {
      let graph =  await load("/graph")
      this.f.raw.graph(graph)
      this.f.raw.syncStamp(syncStamp)
    }

    this.a.vars.init(hash)
    return syncStamp
  },
  async getTraffic(hash) {
    //return await load("/traffic?hash=" + hash)
    let { traffic } = await load("/traffic?hash=" + hash)
    this.f.vars.lastHash(hash)
    this.a.geo.draw(traffic)
}}

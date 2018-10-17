let url = process.env.NODE_ENV === "development" ? "http://localhost:5000" : ""
export const load = path => {
  console.log(" ↓ load", path)
  return new Promise(done =>
    fetch(url + path).then(_ =>
      _.json().then(v => {
        console.log("↓↓↓ loaded", path)
        done(v)
      })
    )
  )
}

export const api = {
  async init() {
    let {hash, dur} = await load("/hash")
    this.f.settings.maxDur(Math.round(Math.max(...dur)))
    console.log(this.f.settings.maxDur.v)

    let raw = this.f.raw
    if (raw.hash.v !== hash) {
      this.f.raw.hash(hash)
      let r = await Promise.all([
        load("/cities"),
        load("/edges"),
        load("/base")
      ])
      raw.cities(r[0])
      raw.edges(r[1])
      raw.base(r[2])
      console.log(r)

      this.a("geo.generate")
    } else {
      this.a("geo.generate")
    }
  },
  async "get-traffic"() {
    let hash = this.f.settings.newHash.v
    let { traffic } = await load("/traffic?hash=" + hash)
    this.f.settings.lastHash(hash)
    this.f.settings.newHash(hash)
    this.a("geo.draw", traffic)
  }
}

let url = process.env.NODE_ENV === "development" ? "http://localhost:5000" : ""
const load = path =>
  new Promise(done => fetch(url + path).then(_ => _.json().then(done)))

export const api = {
  async init() {
    let hash = await load("/hash")
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
  }
}

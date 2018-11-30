import { load } from "./api"

export const vars = {
  async init(hash) {
    let h = hash.split("-")
    let rh = h[0]

    let roads = [
      [false, "silk", "New Silk Road", "High speed railway"],
      [false, "mongolian", "Mongolian", "alternative silk way"],
      [false, "trans_sib", "Trans-Siberian", "railway"],
      [false, "northeast_passage", "Northeast passage", "Sea route"]
    ]
    roads.forEach((r, i) =>
      r[0] = rh[i] === "0" ? false : true
    )


    let ch = h[1].split("_")
    let cap = [
      [ch[0], 23, "Container capacity", "kg"],
      [ch[1], 355, "Railway traffic", "TEU per day"],
      [ch[2], 4346, "High-speed railway traffic", "TEU per day"],
      [ch[3], 61369, "Seaborne traffic", "TEU per day"],
      [ch[4], 1448, "Five Element", "TEU per day"]
    ]

    await this.a.api.getTraffic(hash)
    this.f.vars.capacity(cap)
    this.f.vars.roads(roads)
  },

  //loadHash(hash){
  //  this.a.api.get
  //},
  "hashPartChange"(v) {
    let h = this.f.vars.lastHash.v.split("-")
    let rh = this.f.vars.roadHashPart.v
    let ch = this.f.vars.capacityHashPart.v

    if (rh && ch && (rh !== h[0] || ch !== h[1])) {
      //console.log(rh, ch, h)
      this.f.vars.userHash(`${rh}-${ch}`)
    } else {
      this.f.vars.userHash(false)
    }
  }
}

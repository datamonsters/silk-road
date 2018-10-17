export const settings = {
  init(varsValues, roadsValues) {
    let roads = [
      [false, "silk", "New Silk Road", "High speed railway"],
      [false, "mongolian", "Mongolian", "alternative silk way"],
      [false, "trans_sib", "Trans-Siberian", "railway"],
      [false, "northeast_passage", "Northeast passage", "Sea route"]
    ]
    roads.map(a => ((a[0] = roadsValues[a[1]]), a))
    this.f.settings.roads(roads)

    let vars = [
      [1000, 0, "Container capacity", "kg"],
      [1000, 0, "Railway traffic", "TEU per day"],
      [1000, 0, "High-speed railway traffic", "TEU per day"],
      [1000, 0, "Seaborne traffic", "TEU per day"],
      [1000, 0, "Five Element", "TEU per day"]
    ]
    vars.map(
      (a, i) => ((a[0] = Math.round(varsValues[i])), (a[1] = String(a[0])), a)
    )
    this.f.settings.vars(vars)
  },

  "change-roads"(v){
    console.log(v)
  }
}

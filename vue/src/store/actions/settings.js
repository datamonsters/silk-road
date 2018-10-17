export const settings = {
  init(vars, roadsValues) {
    let roads = [
      [false, "silk", "New Silk Road", "High speed railway"],
      [false, "mongolian", "Mongolian", "alternative silk way"],
      [false, "trans_sib", "Trans-Siberian", "railway"],
      [false, "northeast_passage", "Northeast passage", "Sea route"]
    ]
    roads.map(a => ((a[0] = roadsValues[1]), a))
    console.log({roads})
    //this.f.settings.roads(roads)
  }
}

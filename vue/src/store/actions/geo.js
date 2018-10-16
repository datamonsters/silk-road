export const geo = {
  generate() {
    let c = this.f.raw.cities.v
    let coordinates = []
    let getA = i => {
      let city = c[i]
      return [city.lat, city.lon]
    }

    this.f.raw.edges.v.forEach(e => {
      let a0 = getA(e[0])
      let a1 = getA(e[1])
      if (Math.abs(a0[0] - a1[0]) > 180) {
        if (a0[0] > 0) {
          a1[0] = 180 + (180 - Math.abs(a1[0]))
        } else {
          a1[0] = -180 - (180 - Math.abs(a1[0]))
        }
      }
      coordinates.push([a0, a1])
    })
    this.f.geo.coordinates(coordinates)
  }
}

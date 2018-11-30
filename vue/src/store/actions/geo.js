
export const geo = {
  initGraph() {
    let rawGraph = this.f.raw.graph.v
    let c = rawGraph.cities
    let coordinates = []
    let getA = i => {
      let city = c[i]
      return [city.lat, city.lon]
    }


    let mapEdges = {}
    rawGraph.edges.forEach(e => {
      let a0 = getA(e[0])
      let a1 = getA(e[1])
      if (Math.abs(a0[0] - a1[0]) > 180) {
        if (a0[0] > 0) {
          a1[0] = 180 + (180 - Math.abs(a1[0]))
        } else {
          a1[0] = -180 - (180 - Math.abs(a1[0]))
        }
      }
      let a = [a0, a1]
      coordinates.push(a)
      mapEdges[e[0] + "-" + e[1]] = a
      mapEdges[e[1] + "-" + e[0]] = a
    })


    return {
      coordinates,
      mapEdges
    }
    //this.f.geo.coordinates(coordinates)
    //this.f.geo.mapEdges(mapEdges)

  },

  draw(traffic) {
    let mapEdges = this.f.geo.graph.v.mapEdges
    let tmap = {}
    let maxT = 0

    traffic.forEach(a => {
      let t = Math.round(a[2])
      maxT = Math.max(maxT, t)
      let id = a[0] + "-" + a[1]
      tmap[id] = t
    })

    let features = []
    Object.keys(tmap).forEach(id => {
      let t = tmap[id]
      let percent = (t / maxT) * 100
      features.push({
        type: "Feature",
        properties: {
          width: 10 * Math.sin((percent * Math.PI) / 200),
          color: "#F7455D" // red
        },
        geometry: {
          type: "LineString",
          coordinates: mapEdges[id]
        }
      })
    })
    this.f.geo.onMapFeatures(features)
  }
}

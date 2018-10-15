function coreFlow(cl) {
  cl.x = "wok"
  return cl
}

export const api = {
  init() {
    console.log("init", this)
    this.x = "?"
    this.a("api.getCites")
  },
  async getCites() {
    return {}
  }
}

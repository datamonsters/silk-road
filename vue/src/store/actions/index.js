import { api } from "./api"
import { geo } from "./geo"

export const actions = () => {
  return {
    init() {
      return {}
    },
    api,
    geo
  }
}

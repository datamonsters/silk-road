import { api } from "./api"
import { geo } from "./geo"
import { settings } from "./settings"

export const actions = () => {
  return {
    init() {
      return {}
    },
    api,
    geo,
    settings
  }
}

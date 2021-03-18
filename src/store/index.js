import { createStore } from 'vuex'
import breeds from "./modules/breeds";

export default createStore({
  modules: {
    breeds
  }
})

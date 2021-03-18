import { GET_ALL_BREEDS, GET_RANDOM_BREEDS } from "@/constants/actions";
import {ADD_BREEDS, CLEAR_BREEDS, REMOVE_BREED, SET_BREEDS, SWAP_BREEDS} from "@/constants/mutations";
import { getAllBreeds, getRandomBreeds } from "@/api/http/breeds";

const state = () => ({
  breeds: []
});

const actions = {
  async [GET_ALL_BREEDS](context) {
    const result = await getAllBreeds();

    context.commit(SET_BREEDS, { breeds: result });

    return result;
  },
  async [GET_RANDOM_BREEDS](context, count = 1) {
    const result = await getRandomBreeds(count);

    context.commit(ADD_BREEDS, { breeds: result });

    return result;
  }
};

const mutations = {
  [SET_BREEDS](state, { breeds }) {
    state.breeds = breeds;
  },
  [ADD_BREEDS](state, { breeds }) {
    state.breeds = [...state.breeds, ...breeds];
  },
  [REMOVE_BREED](state, { index }) {
    state.breeds = [...state.breeds.slice(0, index), ...state.breeds.slice(index + 1)];
  },
  [SWAP_BREEDS](state, { firstIndex = 0, secondIndex }) {
    const breeds = state.breeds;

    const firstBreed = breeds[firstIndex];
    breeds[firstIndex] = breeds[secondIndex];
    breeds[secondIndex] = firstBreed;
  },
  [CLEAR_BREEDS](state) {
    state.breeds = [];
  }
};

const getters = {
  allBreeds(state) {
    return state.breeds;
  },
  countBreeds(state) {
    return state.breeds.length;
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}

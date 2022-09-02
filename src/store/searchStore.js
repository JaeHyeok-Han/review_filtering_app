import { getSearchResult } from '../api/kmdbAPI.js';

export default {
  state: {
    searchKeyword: "",
    searchResult: [],
  },
  getters: {
    GET_SEARCH_KEYWORD(state) {
      return state.searchKeyword;
    },
    GET_SEARCH_RESULT(state) {
      return state.searchResult;
    },
  },
  mutations: {
    SET_SEARCH_KEYWORD(state, data) {
      state.searchKeyword = data;
    },
    SET_SEARTCH_RESULT(state, data) {
      state.searchResult = data;
    },
  },
  actions: {
    async FETCH_SEARCH_RESULT({ commit }, title) {
      const response = await getSearchResult(title);
      commit("SET_SEARTCH_RESULT", response);
    },
  }
}
import { getSearchList } from '../api/kmdbAPI.js';

export default {
  state: {
    searchKeyword: "",
    searchList: [],
  },
  getters: {
    GET_SEARCH_KEYWORD(state) {
      return state.searchKeyword;
    },
    GET_SEARCH_LIST(state) {
      return state.searchList;
    },
  },
  mutations: {
    SET_SEARCH_KEYWORD(state, data) {
      state.searchKeyword = data;
    },
    SET_SEARTCH_LIST(state, data) {
      state.searchList = data;
    },
  },
  actions: {
    FETCH_SEARCH_LIST({ commit }, title) {
      commit("SET_SEARCH_KEYWORD", title);
      getSearchList(title)
        .then(res => commit("SET_SEARTCH_LIST", res))
        .catch(err => console.log(err));
    },
  }
}
import Vue from 'vue';
import Vuex from 'vuex';
import { getRanking, getSearchList, getItem, getReview } from '../api/index.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ranking: [],
    searchKeyword: "",
    currentMovie: {},
    searchList: [],
    review: [],
    emotion: {},
    pages: 0,
  },
  getters: {
    GET_RANKING(state) {
      return state.ranking;
    },
    GET_SEARCH_LIST(state) {
      return state.searchList;
    },
    GET_CURRENT_MOVIE(state) {
      return state.currentMovie;
    },
    GET_REVIEW(state) {
      const count = state.pages + 1;
      return state.review.length !== 0 ? state.review.slice(0, count * 10) : null;
    },
    GET_EMOTION(state) {
      return state.emotion;
    }
  },
  mutations: {
    SET_RANKING(state, data) {
      state.ranking = data;
    },
    SET_SEARCHKEYWORD(state, data) {
      state.searchKeyword = data;
    },
    SET_SEARTCH_LIST(state, data) {
      state.searchList = data;
    },
    SET_REVIEW(state, data) {
      state.review = data;
    },
    SET_EMOTION(state, data) {
      state.emotion = data;
    },
    SET_CURRENT_MOVIE(state, data) {
      state.currentMovie = data;
    },
    INCREASE_PAGES(state) {
      state.pages += 1;
    },
    INIT(state) {
      state.review = [];
      state.emotion = {};
      state.pages = 0;
    }
  },
  actions: {
    FETCH_RANKING({ commit }) {
      getRanking()
        .then(res => {
          const items = [];
          res.forEach((ele, index) => {
            items[index] = getItem(ele.movieNm);
          })
          return Promise.all(items);
        })
        .then(res => commit("SET_RANKING", res))
        .catch(err => console.log(err));
    },
    FETCH_SEARCH_LIST({ commit }, title) {
      getSearchList(title)
        .then(res => commit("SET_SEARTCH_LIST", res))
        .catch(err => console.log(err));
    },
    FETCH_REVIEW({ commit }, movieInfo) {
      getReview(movieInfo)
        .then(res => {
          commit("SET_REVIEW", res.review);
          commit("SET_EMOTION", res.emotion);
        })
        .catch(err => console.log(err))
    }
  }
})
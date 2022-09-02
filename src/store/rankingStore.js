import { getRanking } from '../api/kobisAPI.js';
import { getMovieInfo } from '../api/kmdbAPI.js';

export default {
  state: {
    ranking: [],
  },
  getters: {
    GET_RANKING(state) {
      return state.ranking;
    },
  },
  mutations: {
    SET_RANKING(state, data) {
      state.ranking = data;
    },
  },
  actions: {
    async FETCH_RANKING({ commit }) {
      const items = [];
      const rankResponse = await getRanking();
      rankResponse.forEach(ele => items.push(getMovieInfo(ele.movieNm)));
      const response = await Promise.all(items);
      commit("SET_RANKING", response);
    },
  }
}
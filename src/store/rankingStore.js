import { getRanking, getItem } from '../api/index.js';

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
  }
}
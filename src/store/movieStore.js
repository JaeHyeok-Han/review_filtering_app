// import { getReview } from '../api/index.js';

export default {
  state: {
    movie: {},
    // review: [],
    // emotion: [],
  },
  getters: {
    GET_MOVIE(state) {
      return state.movie;
    },
    // GET_REVIEW(state) {
    //   const count = state.pages + 1;
    //   return state.review.length !== 0 ? state.review.slice(0, count * 10) : null;
    // },
    // GET_EMOTION(state) {
    //   return state.emotion;
    // }
  },
  mutations: {
    SET_MOVIE(state, data) {
      state.movie = data;
    },
    // SET_REVIEW(state, data) {
    //   state.review = data;
    // },
    // SET_EMOTION(state, data) {
    //   state.emotion = data;
    // },
  },
  actions: {
    // FETCH_REVIEW({ commit }, movieInfo) {
    //   getReview(movieInfo)
    //     .then(res => {
    //       commit("SET_REVIEW", res.review);
    //       commit("SET_EMOTION", res.emotion);
    //     })
    //     .catch(err => console.log(err))
    // }
  }
}
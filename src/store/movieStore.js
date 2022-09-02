import { getFilteringData } from '../api/customAPI.js';

export default {
  state: {
    movie: {},
    review: [],
    emotion: {},
  },
  getters: {
    GET_MOVIE(state) {
      return state.movie;
    },
    GET_REVIEW(state) {
      return state.review;
    },
    GET_EMOTION(state) {
      return state.emotion;
    }
  },
  mutations: {
    SET_MOVIE(state, data) {
      state.movie = data;
    },
    SET_REVIEW(state, data) {
      state.review = data;
    },
    SET_EMOTION(state, data) {
      state.emotion = data;
    },
  },
  actions: {
    async FETCH_FILTERING_DATA({ commit }, movieId) {
      const response = await getFilteringData(movieId);
      commit("SET_REVIEW", response.reviewData);
      commit("SET_EMOTION", response.emotionData);
    }
  }
}
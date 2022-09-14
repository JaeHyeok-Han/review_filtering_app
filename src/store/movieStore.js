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
      const array = [];
      for (let category in data) {
        array.push({ category: category, per: data[category] });
      }
      state.emotion = array;
    },
  },
  actions: {
    async FETCH_FILTERING_DATA(context) {
      const response = await getFilteringData(context.getters.GET_MOVIE.movieId, context.getters.GET_MOVIE.title);
      context.commit("SET_REVIEW", response.review);
      context.commit("SET_EMOTION", response.emotion);
    }
  }
}
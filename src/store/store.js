import Vue from 'vue';
import Vuex from 'vuex';
import rankingStore from './rankingStore.js';
import searchStore from './searchStore.js';
import movieStore from './movieStore.js';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    rankingStore,
    searchStore,
    movieStore,
  }
})

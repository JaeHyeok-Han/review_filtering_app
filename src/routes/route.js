import Vue from 'vue';
import VueRouter from 'vue-router';
import appMain from '../views/appMain.vue';
import appSearch from '../views/appSearch.vue';
import appDetail from '../views/appDetail.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: "/",
      redirect: "/main"
    },
    {
      path: "/main",
      component: appMain,
      name: "main"
    },
    {
      path: "/search/:keyword",
      component: appSearch,
      name: "search"
    },
    {
      path: "/detail/:movieName",
      component: appDetail,
      name: "detail",
    },
  ]
})
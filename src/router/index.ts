import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

import MainWrapper from "../components/MainWrapper.vue";
// import Test from "../components/TEST.vue";
import AllMovies from "../components/AllMovies.vue";
import AllSerials from "../components/AllSerials.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "main",
    component: MainWrapper,
  },
  {
    path: "/serials",
    name: "Serials",
    component: AllSerials,
  },
  {
    path: "/movies",
    name: "Movies",
    component: AllMovies,
  },
  {
    path: "/films",
    name: "menu-movies",
    component: AllMovies,
  },
  {
    path: "/serials",
    name: "MenuSerials",
    component: AllSerials,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

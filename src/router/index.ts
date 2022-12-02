import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

import MainWrapper from "../components/MainWrapper.vue";
import Test from "../components/TEST.vue";
import AllMovies from "../components/AllMovies.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "main",
    component: MainWrapper,
  },
  {
    path: "/test",
    name: "Test",
    component: Test,
  },
  {
    path: "/movies",
    name: "Movies",
    component: AllMovies,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

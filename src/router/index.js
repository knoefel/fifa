import Vue from "vue";
import VueRouter from "vue-router";
import FunctionalArea from "../views/FunctionalArea";
import FunctionalAreas from "../views/FunctionalAreas";
import Home from "../views/Home";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/functional-areas",
    name: "FunctionalAreas",
    component: FunctionalAreas,
  },
  {
    path: "/functional-areas/add",
    name: "AddFunctionalArea",
    component: FunctionalArea,
  },
  {
    path: "/functional-areas/edit/:id",
    name: "FunctionalArea",
    component: FunctionalArea,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import FunctionalAreas from "../views/FunctionalAreas";
import FunctionalArea from "../views/FunctionalArea";
import AddFunctionalArea from "../views/AddFunctionalArea";

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
    path: "/functional-areas/:id",
    name: "FunctionalArea",
    component: FunctionalArea,
  },
  {
    path: "/functional-areas/add",
    name: "AddFunctionalArea",
    component: AddFunctionalArea,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

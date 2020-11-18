import Vue from "vue";
import VueRouter from "vue-router";
import FunctionalAreas from "../views/FunctionalAreas";
import FunctionalArea from "../views/FunctionalArea";
import AddFunctionalArea from "../views/AddFunctionalArea";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/functional-areas",
  },
  {
    path: "/functional-areas",
    name: "FunctionalAreas",
    component: FunctionalAreas,
  },
  {
    path: "/functional-areas/add",
    name: "AddFunctionalArea",
    component: AddFunctionalArea,
  },
  {
    path: "/functional-areas/:id",
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

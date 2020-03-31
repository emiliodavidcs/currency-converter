import Vue from "vue";
import VueRouter from "vue-router";
import CurrencyConverter from "../views/CurrencyConverter.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "CurrencyConverter",
    component: CurrencyConverter
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

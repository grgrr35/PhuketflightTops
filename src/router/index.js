import Vue from "vue";
import Router from "vue-router";

import Home from "@/views/Homepage.vue";
import Services from "@/views/Servicespage.vue";
import Additional from "@/views/Additionalpage.vue";

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/services",
    name: "services",
    component: Services
  },
  {
    path: "/additional",
    name: "additional",
    component: Additional
  },
  { path: '*', component: Home }
];

const router = new Router({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;
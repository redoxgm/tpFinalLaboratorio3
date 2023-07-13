import { createRouter, createWebHistory } from "vue-router";
import vistaLogin from "../views/vistaLogin.vue";

const routes = [
  {
    path: "/",
    name: "vistaLogin",
    component: vistaLogin,
  },
  {
    path: "/vistaHistorial",
    name: "vistaHistorial",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/vistaHistorial.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

import { createRouter, createWebHistory } from "vue-router";
import loginViews from "../views/loginViews.vue";
import historialViews from "@/views/historialViews.vue";
import analisisViewss from "@/views/analisisViewss";

const routes = [
  {
    path: "/",
    name: "loginViews",
    component: loginViews,
  },
  {
    path: "/historialViews",
    name: "historialViews",
    component: historialViews,
  },
  {
    path: "/analisisViewss",
    name: "analisisViewss",
    component: analisisViewss,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

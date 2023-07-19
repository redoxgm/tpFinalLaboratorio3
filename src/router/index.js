import { createRouter, createWebHistory } from "vue-router";
import vistaLogin from "../views/vistaLogin.vue";
import historialViews from "@/views/historialViews";
import analisisViews from "@/views/analisisViews";

const routes = [
  {
    path: "/",
    name: "vistaLogin",
    component: vistaLogin,
  },
  {
    path: "/Historial",
    name: " historialViews",
    component: historialViews,
  },
  {
    path: "/analisisInversiones",
    name: " analisisInversiones",
    component: analisisViews,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

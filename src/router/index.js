import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Quiz from "../views/Quiz.vue";
import Visualise from "@/views/Visualise.vue";
import Charts from "@/views/Charts.vue";
import ImageSlider from "@/views/ImageSlide.vue";
import New from "@/views/NewLanding.vue";
import ErrorPage from "@/views/404.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      visible: false,
    },
  },
  {
    path: "/quiz",
    name: "Learning",
    component: Quiz,
    meta: {
      visible: true,
    },
  },
  {
    path: "/image",
    name: "Images of Change",
    component: ImageSlider,
    meta: {
      visible: true,
    },
  },
  {
    path: "/charts",
    name: "Graphical Visuals",
    component: Charts,
    meta: {
      visible: true,
    },
  },
  {
    path: "/news",
    name: "Disaster Map",
    component: Visualise,
    meta: {
      visible: true,
    },
  },
  {
    path: "/test",
    name: "Disaster Map",
    component: New,
    meta: {
      visible: false,
    },
  },
  // This is for the 404 page. To be changed
  {
    // path: "*",
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: ErrorPage,
    meta: {
      visible: false,
    },
  },
];

// testing
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

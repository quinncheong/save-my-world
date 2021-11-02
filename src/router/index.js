import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Quiz from "../views/Quiz.vue";
import Visualise from "@/views/Visualise.vue";
import Charts from "@/views/Charts.vue";
import ImageSlider from "@/views/ImageSlide.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      visible: false
    }
  },
  {
    path: "/quiz",
    name: "Climate Quiz",
    component: Quiz,
    meta: {
      visible: true
    },
  },
  {
    path: "/image",
    name: "Images of Change",
    component: ImageSlider,
    meta: {
      visible: true
    },
  },
  {
    path: "/charts",
    name: "Graphical Visuals",
    component: Charts,
    meta: {
      visible: true
    },
  },
  {
    path: "/news",
    name: "Disaster Map",
    component: Visualise,
    meta: {
      visible: true
    },
  },
];

// testing
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

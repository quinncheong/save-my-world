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
  },
  {
    path: "/quiz",
    name: "Test your knowledge",
    component: Quiz,
  },
  {
    path: "/image",
    name: "Images of Change",
    component: ImageSlider,
  },
  {
    path: "/charts",
    name: "Graphical Visuals",
    component: Charts,
  },
  {
    path: "/news",
    name: "Disaster Map",
    component: Visualise,
  },
];

// testing
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

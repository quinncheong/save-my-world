import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Community from "../views/Community.vue";
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
    path: "/community",
    name: "Community",
    component: Community,
  },
  {
    path: "/image",
    name: "ImageSlider",
    component: ImageSlider,
  },
  {
    path: "/charts",
    name: "Charts",
    component: Charts,
  },
  {
    path: "/news",
    name: "Visualise",
    component: Visualise,
  },
];

// testing
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

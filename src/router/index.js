import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Community from "../views/Community.vue";
import Profile from "../views/Profile.vue";
import Visualise from "@/views/Visualise.vue"
import Charts from "@/views/Charts.vue"

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
    path: "/profile",
    name: "Profile",
    component: Profile,
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

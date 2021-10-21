import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Community from "../views/Community.vue";
import Profile from "../views/Profile.vue";
<<<<<<< HEAD
import Visualise from "@/views/Visualise.vue"
import Charts from "@/views/Charts.vue"
=======
import Visualise from "@/views/Visualise.vue";
import Charts from "@/views/Charts.vue";
>>>>>>> development

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
<<<<<<< HEAD
    path: "/news",
=======
    path: "/charts",
>>>>>>> development
    name: "Charts",
    component: Charts,
  },
  {
<<<<<<< HEAD
    path: "/visualise",
=======
    path: "/news",
>>>>>>> development
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

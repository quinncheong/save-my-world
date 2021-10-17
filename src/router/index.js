import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Profile from "../views/Profile.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About

  },

  {
    path: "/profile",
    name: "Profile",
    component: Profile
  },
];

// testing
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

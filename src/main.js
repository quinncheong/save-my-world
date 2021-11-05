import Vue, { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Globallay register FA
import FontAwesomeIcon from "@/assets/js/fontawesome-icons.js";

createApp(App)
  .use(store)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");

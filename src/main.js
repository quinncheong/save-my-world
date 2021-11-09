import Vue, { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Globallay register FA
import FontAwesomeIcon from "@/assets/js/fontawesome-icons.js";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);


createApp(App)
  .use(store)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");

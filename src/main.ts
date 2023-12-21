import { createApp } from "vue";
import pinia from "./stores/index";
import App from "./App.vue";
import "uno.css";

const app = createApp(App);
app.use(pinia);
app.mount("#app");
import { createApp } from "vue";
import pinia from "./stores/index";
import App from "./App.vue";
import "uno.css";
import { drawStars } from "./scripts/star.esm";

const app = createApp(App);
app.use(pinia);
app.mount("#app");

let storage = localStorage.getItem("userConfig");
if (storage) {
  let { config } = JSON.parse(storage);
  drawStars(config.star_speed.value, config.star_amount.value);
} else drawStars();

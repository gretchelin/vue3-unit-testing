import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import "./assets/styles/tailwind.css";
import "./assets/styles/global.scss";

import worker from './mocks/browser';
if (process.env.NODE_ENV === "development") {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  // const worker = require("./mocks/browser");
  worker.start();
}

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");

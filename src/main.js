import Vue from "vue";
import App from "./App.vue";
import "@/assets/styles/main.css";
import vuetify from "./plugins/vuetify";
import store from "./store";
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");

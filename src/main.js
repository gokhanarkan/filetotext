import Vue from "vue";
import App from "./App.vue";
import VueClipboard from "vue-clipboard2";

import "./assets/styles/index.css";

Vue.config.productionTip = false;

Vue.use(VueClipboard);

new Vue({
  render: (h) => h(App),
}).$mount("#app");

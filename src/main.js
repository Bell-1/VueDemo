import Vue from "vue";
import Element from "element-ui";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/scss/global.scss"
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Element);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

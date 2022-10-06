import Vue from "vue";
import App from "./App.vue";
import vuetify from '@/plugins/vuetify' // path to vuetify export
import 'vuetify/dist/vuetify.min.css'
// import VueRouter from "vue-router";
// import Routes from "./routes";
import "vue-phone-number-input/dist/vue-phone-number-input.css";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// Import Bootstrap and BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
// Vue.use(VueRouter);

// const router = new VueRouter({
//   routes: Routes,
// });

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: (h) => h(App),
  // router: router,
}).$mount("#app");

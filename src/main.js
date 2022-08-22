import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VueRouter from 'vue-router';
import Routes from './routes';
import "vue-phone-number-input/dist/vue-phone-number-input.css";

Vue.use(VueRouter);
Vue.use(Vuetify);

const router = new VueRouter({
  routes: Routes
});


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router,
}).$mount('#app')

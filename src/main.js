import Vue from "vue";
import App from "./App.vue";
// @ es un acronimo a src, opcion que nos da vue y webpack
import "@/assets/css/tailwind.css"
import Chart from 'chart.js'
import Chartick from 'vue-chartkick'
import { VueSpinners } from '@saeris/vue-spinners'

import { dollarFilter, percentFilter } from "@/filters";

Vue.use(VueSpinners)
Vue.use(Chartick.use(Chart))
Vue.filter('dollar', dollarFilter)
Vue.filter('percent', percentFilter)

import router from '@/router'

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

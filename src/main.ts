import Vue from 'vue'
import App from './App.vue'
import './assets/settings.scss'
import axios, { AxiosStatic } from 'axios';

new Vue({
  render: h => h(App),
}).$mount('#app');

axios.defaults.baseURL = 'http://192.168.1.225:8088';
Vue.prototype.$axios = axios;
declare module 'vue/types/vue' {
  interface Vue {
    $axios: AxiosStatic;
  }
}
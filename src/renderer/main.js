import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import Vue from 'vue';
import axios from 'axios';
import BootstrapVue from 'bootstrap-vue';

import App from './App';
import router from './router';
import store from './store';
import i18n from './i18n';

Vue.use(BootstrapVue);
if (!process.env.IS_WEB) Vue.use(require('vue-electron'));
Vue.http = Vue.prototype.$http = axios;
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  i18n,
  template: '<App/>',
}).$mount('#app');

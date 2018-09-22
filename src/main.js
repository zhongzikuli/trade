import Vue from 'vue'
import App from './App'
import router from './router'
import axios from './router/axios';
import VueAxios from 'vue-axios';
import store from './store';
import './permission' // 权限

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(VueAxios,axios)
Vue.use(ElementUI);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
});

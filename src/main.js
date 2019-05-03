import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import './plugins/element.js';
import { registeredComponent } from './plugins/utils';
import Packages from './package/index';

Vue.config.productionTip = false;
registeredComponent(Vue, Packages);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');

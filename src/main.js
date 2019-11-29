import Vue from 'vue';
import App from './App.vue';
import './plugins/element.js';
import { registeredComponent } from './plugins/utils';
import Packages from './package/index';
import skeleton from './directive/skeleton';

Vue.config.productionTip = false;
registeredComponent(Vue, Packages);

Vue.use(skeleton);

new Vue({
  render: (h) => h(App),
}).$mount('#app');

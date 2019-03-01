import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import './plugins/element.js';
import DynamicSelect from './package/dynamic-select/index';

Vue.config.productionTip = false;

Vue.use(DynamicSelect);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');

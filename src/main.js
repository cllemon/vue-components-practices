import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import './plugins/element.js';
import DynamicSelect from './package/dynamic-select/index';
import TableColumnImages from './package/table-column-images/index';

Vue.config.productionTip = false;

Vue.use(DynamicSelect);
Vue.use(TableColumnImages);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');

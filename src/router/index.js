import Vue from 'vue';
import Router from 'vue-router';
import list from './list';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: list,
});

export default router;

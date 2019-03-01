const Home = () => import('../views/Home.vue');
const Form = () => import('../views/Form.vue');
const Table = () => import('../views/Table.vue');
const About = () => import('../views/About.vue');

export default [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
  },
  {
    path: '/form',
    name: 'form',
    component: Form,
  },
  {
    path: '/table',
    name: 'table',
    component: Table,
  },
  {
    path: '/About',
    name: 'about',
    component: About,
  },
];

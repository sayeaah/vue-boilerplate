import { createWebHistory, createRouter } from "vue-router";
import Home from '../views/Home.vue';
import State from '../views/State.vue'
import Axios from '../views/Axios.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/state',
    name: 'State',
    component: State
  },
  {
    path: '/axios',
    name: 'Axios',
    component: Axios
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router

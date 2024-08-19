import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Dashboard from '../pages/index.vue'
import Profile from '../pages/profile.vue'


const routes: Array<RouteRecordRaw> = [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
  
export default router;
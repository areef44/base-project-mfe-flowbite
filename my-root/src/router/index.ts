import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Dashboard from '../pages/index.vue'
import Profile from '../pages/profile.vue'
import React from '../pages/react-component.vue';

const routes: Array<RouteRecordRaw> = [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
      meta: {
        icon: 'mdi-chart-pie-outline',
      },
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      meta: {
        icon: 'mdi-account-outline',
      },
    },
    {
      path: '/react',
      name: 'React Component',
      component: React,
      meta: {
        icon: 'mdi-react',
      },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
  
export default router;
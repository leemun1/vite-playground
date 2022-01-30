import { createRouter, createWebHistory } from 'vue-router';

import Home from './views/Home/HomeView.vue';
import Company from './views/Company/CompanyList.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/companies', component: Company },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

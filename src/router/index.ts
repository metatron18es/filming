import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import type { Component } from 'vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/movie/:id',
      name: 'movie',
      component: () => { return import('../views/MovieView.vue') as Component; }
    },
    {
      path: '/search/:search',
      name: 'movies-search',
      component: () => { return import('../views/SearchView.vue') as Component; }
    }
  ]
});

export default router;

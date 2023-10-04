<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';

import MySearchResults from './MySearchResults.vue';

import { useMovies } from '../composables/useMovies';

import { useLoadingStore } from '@/stores/UseLoadingStore';

import type { Movie } from '@/types';

const { topRatedMovies } = useMovies();

const movies = ref<Movie[]>([]);

onMounted(async() => {
  movies.value = await topRatedMovies();
});

watch(
  () => { return movies.value; },
  (moviesData) => {
    useLoadingStore().setShowLoading(moviesData.length === 0);
  }
);
</script>

<template>
  <MySearchResults
    title="Las películas más populares de hoy"
    :movies="movies"
  />
</template>
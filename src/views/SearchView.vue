<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';

import MySearch from '@/components/MySearch.vue';
import MySearchResults from '@/components/MySearchResults.vue';

import { useMovies } from '../composables/useMovies';
import { useRoute } from 'vue-router';

import type { Movie } from '@/types';

const { searchMovies } = useMovies();

const route = useRoute();

const search = ref('');

const searchTitle = computed(() => {
  return `Resultado de la busqueda de: ${search.value}`;
});

const movies = ref<Movie[]>([]);

onMounted(async() => {
  if (route.params.search) {
    search.value = route.params.search as string;
    movies.value = await searchMovies(search.value);
  }
});
</script>

<template>
  <MySearch />
  <MySearchResults
    :title="searchTitle"
    :movies="movies"
  />
</template>

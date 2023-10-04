<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

import { useMovies } from '../composables/useMovies';
import { useUtils } from "../composables/useUtils";

import type { Movie } from '@/types';

const route = useRoute();

const movie = ref<Movie>({} as Movie);
const id = parseInt(route.params.id as string);

onMounted(async () => {
  movie.value = await useMovies().getMovieInfo(id);
});

</script>

<template>
  <h2 class="movie-title" data-testid="movie-title">{{ movie.title }}</h2>
  <section class="movie-info">
    <img :src="useUtils().parseImgUrl(movie.poster_path)" :alt="movie.title" class="movie-img">
    <ul class="movie-data-list">
      <li class=movie-data>
        <span class="data-title">Resumen</span>
        <span class="data-info">{{ movie.overview }}</span>
      </li>
      <li class=movie-data>
        <span class="data-title">Fecha de estreno</span>
        <span class="data-info">{{ movie.release_date }}</span>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.movie-title {
  padding-bottom: 0.5rem;
  margin-bottom: 2rem;
  border-bottom: 2px solid white;
  font-size: 1.5rem;
}
.movie-info {
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 2rem;
}
  @media screen and (max-width: 600px) {
    .movie-info {
      flex-direction: column;
      align-items: center;
    }
  }
.movie-img {
  height: min(100%, 25rem);
}
.movie-data-list,
.movie-data {
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
}
.movie-data-list {
  gap: 1.5rem;
}
.movie-data {
  gap: 0.5rem;
}
.data-title {
  border-bottom: 1px solid white;
  font-size: 1.2rem;
}
</style>

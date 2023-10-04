<script setup lang="ts">
import { useUtils } from "../composables/useUtils";
import type { Movie } from '@/types';

const props = defineProps<{
  title: string;
  movies: Movie[];
}>();
</script>

<template>
  <section class="common-section">
    <h2 class="section-title" data-testid="movie-search-title">{{ props.title }}</h2>
    <ul class="common-list" v-if="props.movies.length > 0">
      <li
        v-for="movie in props.movies"
        :key="movie.id"
        class="common-list-item"
        data-testid="movie-item"
      >
        <figure class="figure-item">
          <RouterLink class="figure-link" :to="`/movie/${movie.id}`">
            <img
              :src="useUtils().parseImgUrl(movie.poster_path)"
              :alt="movie.title"
              class="figure-img"
            >
          </RouterLink>
          <figcaption class="figure-figcaption">{{ movie.title }} - {{ movie.id }}</figcaption>
        </figure>
      </li>
    </ul>
    <article v-else class="empty-search" data-testid="empty-search">
      <p class="empty-search-title">La busqueda no ha dado ningún resultado</p>
    </article>
  </section>
</template>

<style scoped>

.common-section {
  padding: 2rem 0;
  overflow-y: auto;
}
  .section-title {
    font-size: 1.5em;
    padding-bottom: 2rem;
  }
  @media screen and (max-width: 480px) {
    .section-title {
      padding-bottom: 1rem;
      font-size: 1rem;
    }
  }
  .common-list {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
  }
    .figure-link {
      --columns: 6;
      display: flex;
      width: calc(calc(100vw - 4rem) / var(--columns));
      box-sizing: border-box;
      border: 2px solid #141414;
      transition: transform .3s;
      cursor: pointer;
    }

    @media screen and (max-width: 1000px) {
      .figure-link {
        --columns: 5;
      }
    }

    @media screen and (max-width: 800px) {
      .figure-link {
        --columns: 4;
      }
    }

    @media screen and (max-width: 600px) {
      .figure-link {
        --columns: 3;
      }
    }

    @media screen and (max-width: 400px) {
      .figure-link {
        --columns: 2;
      }
    }
      .figure-link:hover {
        transform: scale(1.1);
      }
        .figure-img {
          object-fit: cover;
          width: 100%;
        }
        .figure-figcaption {
          display: none;
        }

  .empty-search {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    width: fit-content;
    margin: 0 auto;
    border: 1px solid var(--red);
    border-radius: var(--radius);
    font-size: 1.2rem;
    text-align: center;
  }
  @media screen and (max-width: 400px) {
    .empty-search {
      padding: 1rem;
      font-size: 1rem;
    }
  }

</style>
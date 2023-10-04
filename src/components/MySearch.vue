<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const search = ref('');

function isEmpty(value: string) {
  return value === null || value === undefined || value.trim() === '';
}
async function getSearch() {
  if (isEmpty(search.value)) {
    return;
  }
  await router.push({ name: 'movies-search', params: { search: search.value } });
}

onMounted(() => {
  if (route.params.search) {
    search.value = route.params.search as string;
  }
});
</script>

<template>
  <section class="search">
    <label class="search-label" for="search">Busqueda</label>
    <input class="search-input" type="text" id="search" placeholder="Buscar..." v-model="search">
    <button class="search-button" type="button" @click="getSearch">
      Buscar
    </button>
  </section>
</template>

<style scoped>
.search {
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
}
.search-label {
  width: 100%;
  font-size: 1.5rem;
}
  @media screen and (max-width: 480px) {
    .search-label {
      font-size: 1rem;
    }
  }
.search-input {
  width: calc(100% - 8rem);
  height: 2.4rem;
  padding: 0 1rem;
  border-width: 1px 0 1px 1px;
  border-style: solid;
  border-color: rgba(255, 255, 255, 0.5);
  border-radius: var(--radius) 0 0 var(--radius);
}
  @media screen and (max-width: 360px) {
    .search-input {
      width: calc(100% - 5rem);
    }
  }
.search-button {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  width: 8rem;
  height: 2.4rem;
  background-color: var(--blue);
  border-radius: 0 var(--radius) var(--radius) 0;
  transition: background-color .3s;
  cursor: pointer;
}
  @media screen and (max-width: 360px) {
    .search-button {
      width: 5rem;
    }
  }
.search-button:hover {
  background-color: var(--dark-blue);
}

</style>

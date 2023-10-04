<script setup lang="ts">
import { useLoadingStore } from '@/stores/UseLoadingStore';

import MyHeader from '@/components/MyHeader.vue';
import MyMain from '@/components/MyMain.vue';
import MyLoading from '@/components/MyLoading.vue';

import { RouterView } from 'vue-router';
</script>

<template>
  <MyHeader />
  <MyMain>
    <RouterView />
  </MyMain>
  <MyLoading
    v-if="useLoadingStore().showLoading"
  />
</template>

<style>
#app {
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
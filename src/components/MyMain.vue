<script setup lang="ts">
</script>

<template>
  <main class="main">
    <slot />
  </main>
</template>

<style scoped>
.main {
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: stretch;
  width: 100%;
  height: calc(100% - 5rem);
  padding: 2rem;
  overflow-y: auto;
}
</style>

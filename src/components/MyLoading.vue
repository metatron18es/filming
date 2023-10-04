<script setup lang="ts">
import { useLoadingStore } from '@/stores/UseLoadingStore';
import { onMounted, ref } from 'vue';

const dialog = ref(null);

onMounted(() => {
  const dialogValue = dialog.value as unknown as HTMLDialogElement;
  dialogValue.showModal();
});
</script>

<template>
  <dialog
    ref="dialog"
    class="dialog"
  >
    <span class="spinner" />
    <p
      v-once
      class="loading-text"
    >
      <slot>
        {{ useLoadingStore().loadingText }}
      </slot>
    </p>
  </dialog>
</template>

<style scoped>
.dialog {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.dialog::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--backdrop);
  z-index: 0;
}
.loading {
  font-size: 10rem;
}
.spinner {
  display: inline-block;
  width: 10rem;
  height: 10rem;
  margin-bottom: 2rem;
  position: relative;
  border-radius: 50%;
  border: 0.75rem solid var(--dark-navy);
  border-left-color:var(--blue);
  animation: spinner .85s linear infinite;
}

@keyframes spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.loading-text {
  font-size: 1.5rem;
  z-index: 1;
}
</style>

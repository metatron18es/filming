import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useLoadingStore = defineStore('loading', () => {
  const loadingText = ref('Loading...');
  const showLoading = ref(true);
  
  const setLoadingText = (text: string) => {
    loadingText.value = text;
  };

  const setShowLoading = (value: boolean) => {
    showLoading.value = value;
  };

  return {
    loadingText,
    setLoadingText,
    showLoading,
    setShowLoading,
  };
});

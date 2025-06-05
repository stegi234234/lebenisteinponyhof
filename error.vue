<template>
  <NuxtLayout name="default">
    <div class="error-container flex flex-col items-center justify-center min-h-[70vh] p-6 md:p-10 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 text-center relative overflow-hidden">
      <div class="background-elements absolute inset-0 z-0 overflow-hidden" ref="backgroundElementsContainer">
        </div>

      <div class="error-content max-w-lg p-8 bg-white/90 dark:bg-black/80 backdrop-blur-sm rounded-2xl shadow-xl z-10 relative border border-gray-200 dark:border-gray-700">
        <div class="horse-animation mb-8 w-full relative h-32 md:h-40 flex items-center justify-center">
          <i class="fas fa-question-circle text-6xl md:text-8xl text-primary-color opacity-70 animate-pulse"></i>
          <div class="hoofprints absolute inset-0" ref="hoofprintsContainer">
          </div>
        </div>
        <h1 class="error-title text-3xl md:text-4xl font-bold mb-4 text-primary-color">
           {{ errorTitle }}
        </h1>
        <p class="error-message text-base md:text-lg text-gray-700 dark:text-gray-300 mb-8">
          {{ errorMessage }}
        </p>

        <div class="error-buttons flex flex-col sm:flex-row justify-center gap-4 mt-6">
          <NuxtLink href="/" class="error-button inline-flex items-center justify-center gap-2 bg-gradient-primary text-white px-6 py-3 rounded-full font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
            <i class="fas fa-home"></i>
            Zurück zur Startseite
          </NuxtLink>
          <button @click="handleErrorClear" v-if="showClearButton" class="error-button inline-flex items-center justify-center gap-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-6 py-3 rounded-full font-bold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
            <i class="fas fa-redo"></i>
            Erneut versuchen
          </button>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
import { NuxtLayout, NuxtLink } from '#components';
import { useError, clearError, useHead } from '#app';
import { ref, computed, onMounted } from 'vue';

const props = defineProps({
  error: {
      type: Object,
      required: true
  }
});

const errorData = useError().value || props.error;

const errorTitle = computed(() => {
    return errorData?.statusCode === 404 ? '404 - Seite nicht gefunden!' : 'Upps! Etwas ist schiefgelaufen.';
});

const errorMessage = computed(() => {
  if (errorData?.statusCode === 404) {
    return "Die gesuchte Seite existiert leider nicht (mehr). Vielleicht hat sie sich im Heu versteckt oder ist auf die Weide galoppiert?";
  }
  return errorData?.message || 'Ein unerwarteter technischer Fehler ist aufgetreten. Bitte versuche es später erneut.';
});

const showClearButton = computed(() => errorData?.statusCode !== 404);

const handleErrorClear = () => {
    clearError({ redirect: '/' });
};

const backgroundElementsContainer = ref(null);
const hoofprintsContainer = ref(null);

onMounted(() => {
  // DOM-Manipulation vorerst entfernt, um Fehlerquelle auszuschließen
  console.log("Error page mounted (Client-side). DOM manipulation currently disabled for testing.");
});

useHead({
  title: `${errorData?.statusCode || 'Fehler'} - Fehler`,
  titleTemplate: '%s | Leben ist ein Ponyhof',
  meta: [{ name: 'robots', content: 'noindex, follow' }]
})
</script>

<style scoped>
@keyframes float {
  0%   { transform: translateY(100vh) rotate(0deg); opacity: 0; }
  10%  { opacity: 0.05; }
  90%  { opacity: 0.05; }
  100% { transform: translateY(-100px) rotate(360deg); opacity: 0; }
}
@keyframes fadeInOut {
  0%   { opacity: 0; transform: scale(0.5); }
  50%  { opacity: 1; transform: scale(1); }
  100% { opacity: 0; transform: scale(0.5); }
}
@keyframes pulse { 50% { opacity: .5; } }

.background-element {
    animation-name: float;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}
.hoofprint {
    animation-name: fadeInOut;
    animation-iteration-count: infinite;
}
.animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>
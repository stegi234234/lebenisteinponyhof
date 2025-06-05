<template>
  <Transition
    enter-active-class="transition-opacity ease-out duration-300"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-opacity ease-in duration-200"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0 pointer-events-none"
  >
    <div
      v-if="lightbox.isVisible.value"
      id="lightboxModal"
      class="lightbox-modal fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4"
      @click.self="lightbox.close()"
      role="dialog"
      aria-modal="true"
      :aria-labelledby="lightbox.currentCaption.value ? 'lightboxCaptionElement' : undefined"
    >
      <button
        @click="lightbox.close()"
        class="lightbox-close absolute top-3 right-3 md:top-5 md:right-5 text-white/70 text-3xl sm:text-4xl hover:text-white transition-colors z-[1001] outline-none focus-visible:ring-2 focus-visible:ring-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center leading-none bg-black/20 hover:bg-black/40"
        aria-label="Lightbox schließen"
      >
        ×
      </button>
      <div class="relative flex flex-col items-center max-w-full max-h-full">
        <div class="relative transform transition-transform duration-300 ease-out" :style="imageZoomStyle">
          <Transition name="lightbox-image-scale" mode="out-in" appear>
            <img
              :key="lightbox.currentSrc.value"
              :src="lightbox.currentSrc.value"
              :alt="lightbox.currentCaption.value || 'Großansicht des Bildes'"
              id="lightboxImageDescription"
              class="block max-w-[95vw] max-h-[80vh] sm:max-w-[90vw] sm:max-h-[85vh] object-contain rounded-lg shadow-2xl"
              @click="toggleZoom"
              style="cursor: zoom-in;"
              :style="isZoomed ? 'cursor: zoom-out;' : 'cursor: zoom-in;'"
            />
          </Transition>
        </div>
        <div
          v-if="lightbox.currentCaption.value"
          id="lightboxCaptionElement"
          class="lightbox-caption text-white text-center mt-3 md:mt-4 text-sm sm:text-base px-4 break-words max-w-md sm:max-w-lg lg:max-w-2xl opacity-90"
        >
          {{ lightbox.currentCaption.value }}
        </div>
      </div>
      <button
        v-if="isGallery"
        @click.stop="navigateAndResetZoom('prev')"
        class="absolute left-1 sm:left-3 top-1/2 -translate-y-1/2 p-2 sm:p-4 bg-black/30 hover:bg-black/60 text-white/80 hover:text-white rounded-full transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white z-[1000] backdrop-blur-sm"
        aria-label="Vorheriges Bild"
      >
        <i class="fas fa-chevron-left text-lg sm:text-2xl"></i>
      </button>
      <button
        v-if="isGallery"
        @click.stop="navigateAndResetZoom('next')"
        class="absolute right-1 sm:right-3 top-1/2 -translate-y-1/2 p-2 sm:p-4 bg-black/30 hover:bg-black/60 text-white/80 hover:text-white rounded-full transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white z-[1000] backdrop-blur-sm"
        aria-label="Nächstes Bild"
      >
        <i class="fas fa-chevron-right text-lg sm:text-2xl"></i>
      </button>
    </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch, computed } from 'vue';
import { useLightbox } from '~/composables/useLightbox';

const lightbox = useLightbox();
const isZoomed = ref(false);

// isGallery prüft jetzt die Länge von lightbox.currentGallery.value
const isGallery = computed(() => lightbox.currentGallery.value && lightbox.currentGallery.value.length > 1);

const imageZoomStyle = computed(() => ({
  transform: isZoomed.value ? 'scale(1.25)' : 'scale(1)',
}));

const toggleZoom = () => { isZoomed.value = !isZoomed.value; };

const navigateAndResetZoom = (direction) => {
  isZoomed.value = false;
  if (direction === 'prev') {
    lightbox.prev();
  } else {
    lightbox.next();
  }
};

const handleKeydown = (e) => {
  if (!lightbox.isVisible.value) return;
  if (e.key === 'Escape') {
    lightbox.close();
    isZoomed.value = false;
  }
  if (isGallery.value) { // Verwende die Computed Property
    if (e.key === 'ArrowRight') navigateAndResetZoom('next');
    else if (e.key === 'ArrowLeft') navigateAndResetZoom('prev');
  }
};

onMounted(() => { if (process.client) window.addEventListener('keydown', handleKeydown); });
onUnmounted(() => {
  if (process.client) window.removeEventListener('keydown', handleKeydown);
  if (lightbox.isVisible.value && process.client) document.body.style.overflow = '';
});
watch(lightbox.isVisible, (newValue) => {
  if (process.client) document.body.style.overflow = newValue ? 'hidden' : '';
  if (!newValue) isZoomed.value = false;
});
</script>

<style scoped>
.lightbox-image-scale-enter-active,
.lightbox-image-scale-leave-active {
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.lightbox-image-scale-enter-from,
.lightbox-image-scale-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
.lightbox-image-scale-enter-to,
.lightbox-image-scale-leave-from {
  opacity: 1;
  transform: scale(1);
}
</style>
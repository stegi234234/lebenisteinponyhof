<template>
  <div v-if="images && images.length > 0" class="horse-image-gallery mt-10 pt-10 border-t-2 border-primary-color/20 dark:border-primary-light/20">
    <h3 class="text-2xl sm:text-3xl font-semibold mb-8 text-center text-gray-800 dark:text-white">
      <i class="fas fa-images text-primary-color dark:text-primary-light mr-2"></i>
      Galerie: Mehr von {{ horseName }}
    </h3>
    <div class="columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-3 md:gap-4 space-y-3 md:space-y-4">
      <div
        v-for="(image, index) in images"
        :key="image.src + index"
        class="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-[1.03] transition-all duration-300 ease-in-out cursor-pointer group break-inside-avoid"
        @click="openImageInLightbox(index)"
        @keydown.enter.space.prevent="openImageInLightbox(index)"
        tabindex="0"
        role="button"
        :aria-label="`Öffne Bild ${index + 1} von ${horseName} in Großansicht: ${image.alt}`"
      >
        <NuxtImg
          :src="image.src"
          :alt="image.alt"
          :width="image.width"
          :height="image.height"
          format="webp"
          quality="75"
          loading="lazy"
          densities="1x 2x"
          class="w-full h-auto object-cover block"
          sizes="xs:50vw sm:33vw md:25vw lg:20vw"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3 flex flex-col justify-end">
          <p v-if="image.caption" class="text-white text-xs font-medium truncate">{{ image.caption }}</p>
          <div v-else class="absolute inset-0 flex items-center justify-center">
            <i class="fas fa-search-plus text-white text-4xl opacity-70 group-hover:opacity-100 transition-opacity"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="mt-8 text-center text-gray-500 dark:text-gray-400">
    <p>Bald gibt es hier mehr Bilder von {{ horseName }} zu entdecken!</p>
  </div>
</template>

<script setup>
// NuxtImg wird automatisch importiert, wenn im Template verwendet.
// import { NuxtImg } from '#components';
import { useLightbox } from '~/composables/useLightbox';
// Kein expliziter Typimport für GalleryImage in reinem JS nötig,
// aber die Struktur aus data/horses.js sollte beachtet werden.

const props = defineProps({
  images: {
    type: Array,
    default: () => [] // Standardwert als leeres Array
  },
  horseName: {
    type: String,
    required: true
  }
});

const lightbox = useLightbox();

const openImageInLightbox = (startIndex) => {
  if (props.images && props.images.length > 0) {
    const lightboxItems = props.images.map(img => ({
      src: img.src,
      caption: img.caption || img.alt
    }));
    lightbox.openGallery(lightboxItems, startIndex);
  }
};
</script>

<style scoped>
.break-inside-avoid {
  break-inside: avoid-column;
  page-break-inside: avoid;
}
</style>
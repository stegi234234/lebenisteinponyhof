<template>
  <NuxtLink
    :to="props.link"
    class="highlight-card-link group block rounded-xl overflow-hidden shadow-lg hover:shadow-2xl dark:shadow-black/30 dark:hover:shadow-black/50 transform hover:-translate-y-1.5 transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-color focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900 h-full"
    :aria-label="`Mehr über ${props.title} erfahren`"
  >
    <div class="highlight-card bg-white dark:bg-gray-800 text-left flex flex-col h-full">
      <div class="relative aspect-[4/3] overflow-hidden">
        <NuxtImg
          :src="props.imgSrc"
          :alt="props.altText"
          class="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
          :width="props.imageWidth"
          :height="props.imageHeight"
          format="webp"
          quality="75"
          loading="lazy"
          densities="1x 2x"
          :placeholder="placeholderImageSrc"
          sizes="xs:100vw sm:50vw lg:33vw xl:300px" 
        />
        <!-- Optional: Overlay für besseren Kontrast des Titels, wenn Bild sehr hell ist -->
        <!-- <div class="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> -->
      </div>

      <div class="p-5 md:p-6 flex flex-col flex-grow">
        <div class="flex-grow">
          <h3 class="text-xl font-semibold mb-2 text-gray-800 dark:text-white group-hover:text-primary-color dark:group-hover:text-primary-light transition-colors duration-200 line-clamp-2">
            {{ props.title }}
          </h3>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-4 min-h-[4.5em] leading-relaxed line-clamp-3">
            {{ props.description }}
          </p>
        </div>
        <div class="mt-auto pt-4">
          <span
            class="card-btn inline-flex items-center justify-center gap-x-1.5 px-5 py-2.5 text-xs sm:text-sm rounded-full font-semibold bg-gradient-to-r from-pink-500 to-orange-400 text-white dark:from-pink-400 dark:to-orange-300 dark:text-gray-900 group-hover:brightness-110 dark:group-hover:brightness-120 transition-all duration-200 shadow-md"
            aria-hidden="true"
          >
            {{ props.linkText }}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5">
              <path fill-rule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clip-rule="evenodd" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { NuxtLink, NuxtImg } from '#components'; // NuxtLink ist explizit, da es ein Prop ist
import type { RouteLocationRaw } from 'vue-router';

interface Props {
  imgSrc: string;
  altText: string;
  title: string;
  description: string;
  link: RouteLocationRaw; // Für NuxtLink
  linkText?: string;
  imageWidth?: number;
  imageHeight?: number;
  placeholderImg?: string | boolean; // Kann auch boolean für generisches Placeholder sein
}

const props = withDefaults(defineProps<Props>(), {
  linkText: 'Mehr erfahren',
  imageWidth: 400,
  imageHeight: 300,
  placeholderImg: '/images/card-placeholder-4-3.webp', // Standard-Fallback-Placeholder
});

// Validierung der Props (kann auch im defineProps mit `validator` gemacht werden)
if (!props.imgSrc || !props.imgSrc.startsWith('/images/')) {
  console.warn(`[HighlightCard] Ungültiger oder fehlender imgSrc für Titel "${props.title}": ${props.imgSrc}. Muss mit '/images/' beginnen.`);
}
if (props.placeholderImg && typeof props.placeholderImg === 'string' && !props.placeholderImg.startsWith('/images/')) {
  console.warn(`[HighlightCard] Ungültiger placeholderImg für Titel "${props.title}": ${props.placeholderImg}. Muss mit '/images/' beginnen oder true/false sein.`);
}

const placeholderImageSrc = computed(() => {
  if (typeof props.placeholderImg === 'string' && props.placeholderImg.startsWith('/images/')) {
    return props.placeholderImg;
  }
  // Wenn placeholderImg true ist oder ungültig, nutze einen generischen oder keinen.
  // Hier als Beispiel ein Standard-Placeholder-Pfad.
  // Wenn placeholderImg `false` ist, wird `undefined` zurückgegeben, was NuxtImg standardmäßig behandelt.
  return props.placeholderImg === true ? '/images/card-placeholder-4-3.webp' : undefined;
});

</script>

<style scoped>
/* Stellt sicher, dass die Mindesthöhe für die Beschreibung angewendet wird */
.min-h-\[4\.5em\] {
  min-height: 4.5em; /* ca. 3 Zeilen Text */
}

/* line-clamp für Titel und Beschreibung (Tailwind Plugin Typography oder manuell) */
.line-clamp-2 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.line-clamp-3 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}
</style>
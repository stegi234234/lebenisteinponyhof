<template>
  <section
    :id="id"
    :aria-labelledby="`${id}-heading`"
    class="offer-section flex flex-col md:flex-row items-center gap-8 md:gap-12 bg-white dark:bg-gray-800 p-6 md:p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700/50 transition-shadow hover:shadow-xl"
    :class="{ 'md:flex-row-reverse': !imageOnLeft }"
  >
    <div class="w-full md:w-2/5 flex-shrink-0 rounded-lg overflow-hidden shadow-md" :class="imageAspect">
      <NuxtImg
        :src="imageSrc"
        :alt="imageAlt"
        class="w-full h-full object-cover"
        :format="imageFormat"
        :quality="imageQuality"
        loading="lazy"
        :width="imageWidth"
        :height="imageHeight"
        placeholder
        densities="1x 2x"
        sizes="(max-width: 767px) 90vw, (max-width: 1023px) 40vw, 33vw"
      />
    </div>
    <div class="flex-1">
      <div class="flex flex-col sm:flex-row justify-between items-start gap-2 mb-3">
        <h2 :id="`${id}-heading`" class="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white flex-grow">
          <i v-if="icon" :class="[icon, 'text-primary-color dark:text-primary-light mr-2.5 text-xl']"></i>
          {{ title }}
        </h2>
        <span
          v-if="badgeText"
          class="text-xs font-medium px-2.5 py-1 rounded-full whitespace-nowrap mt-1 sm:mt-0"
          :class="badgeClasses"
        >
          {{ badgeText }}
        </span>
      </div>
      <div class="prose prose-sm sm:prose-base dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 mb-5 leading-relaxed">
        <slot>
          <p>Keine Beschreibung verfügbar.</p>
        </slot>
      </div>
      <div class="flex flex-wrap gap-3">
        <slot name="actions"></slot>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { NuxtImg } from '#components';

interface Props {
  id: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  imageWidth?: number;
  imageHeight?: number;
  imageAspect?: string; // z.B. 'aspect-[3/4]', 'aspect-[1/1]', 'aspect-[4/3]'
  imageOnLeft?: boolean;
  icon?: string;
  badgeText?: string;
  badgeColor?: 'green' | 'amber' | 'red' | 'blue' | 'primary';
  imageFormat?: 'webp' | 'jpeg' | 'png' | 'avif';
  imageQuality?: number;
}

const props = withDefaults(defineProps<Props>(), {
  imageOnLeft: true,
  imageAspect: 'aspect-[4/3]', // Standard-Seitenverhältnis
  imageWidth: 800,
  imageHeight: 600,
  badgeColor: 'primary',
  imageFormat: 'webp',
  imageQuality: 75,
});

const badgeClasses = computed(() => {
  switch (props.badgeColor) {
    case 'green':
      return 'bg-green-100 dark:bg-green-700/50 text-green-700 dark:text-green-300';
    case 'amber':
      return 'bg-amber-100 dark:bg-amber-700/50 text-amber-700 dark:text-amber-300';
    case 'red':
      return 'bg-red-100 dark:bg-red-700/50 text-red-700 dark:text-red-300';
    case 'blue':
      return 'bg-blue-100 dark:bg-blue-700/50 text-blue-700 dark:text-blue-300';
    default: // primary
      return 'bg-primary-color/10 dark:bg-primary-light/20 text-primary-color dark:text-primary-light';
  }
});
</script>

<style scoped>
.offer-section h2 i {
  /* Optional: Vertikale Ausrichtung anpassen, falls nötig */
  /* vertical-align: middle; */
}
/* Ensure NuxtImg fills the aspect ratio container */
.aspect-\[3\/4\] > :deep(.nuxt-image),
.aspect-\[1\/1\] > :deep(.nuxt-image),
.aspect-\[4\/3\] > :deep(.nuxt-image) {
    width: 100%;
    height: 100%;
}
</style>
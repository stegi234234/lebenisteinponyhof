<template>
  <div
    :class="[
      'external-media-placeholder bg-gray-100 dark:bg-gray-800 p-4 sm:p-6 rounded-lg text-center flex flex-col items-center justify-center border border-gray-200 dark:border-gray-700',
      props.className || 'aspect-video min-h-[250px]' // Standard-Seitenverhältnis + Mindesthöhe
    ]"
    role="region"
    :aria-label="`Platzhalter für Inhalte von ${platformDisplayName}`"
  >
    <div class="mb-3 md:mb-4">
      <i :class="iconClass" class="text-4xl md:text-5xl opacity-60" :style="{ color: iconColor }"></i>
    </div>
    <p class="text-base font-semibold text-gray-700 dark:text-gray-200 mb-1">
      {{ message || `Inhalt von ${platformDisplayName} anzeigen?` }}
    </p>
    <p class="text-xs text-gray-500 dark:text-gray-400 mb-4 max-w-sm">
      Durch das Laden dieses Inhalts werden möglicherweise Daten an {{ platformDisplayName }} übertragen und Cookies gesetzt.
      Mehr Informationen dazu finden Sie in unserer <NuxtLink to="/datenschutz" class="underline hover:text-primary-color dark:hover:text-primary-light">Datenschutzerklärung</NuxtLink>.
    </p>
    <div class="flex flex-col sm:flex-row gap-2.5 sm:gap-3 w-full max-w-xs sm:max-w-sm">
      <AppButton
        @click="$emit('acceptConsent')"
        variant="primary"
        size="normal"
        class="flex-1 text-sm"
        :aria-label="`Inhalte von ${platformDisplayName} jetzt laden und Marketing-Cookies akzeptieren`"
      >
        <i :class="`${iconClassMini} mr-1.5`"></i> {{ platformDisplayName }} Inhalt laden
      </AppButton>
      <AppButton
        @click="$emit('openSettings')"
        variant="secondary"
        size="normal"
        class="flex-1 text-sm"
        aria-label="Cookie-Einstellungen öffnen, um Präferenzen anzupassen"
      >
        <i class="fas fa-cog mr-1.5"></i> Einstellungen
      </AppButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { NuxtLink } from '#components';
import AppButton from '~/components/AppButton.vue'; // Deinen AppButton verwenden

interface Props {
  platform: 'YouTube' | 'TikTok' | 'Instagram' | 'GoogleMaps' | string; // string für Flexibilität
  className?: string;
  message?: string; // Optionale benutzerdefinierte Nachricht
}

const props = defineProps<Props>();

defineEmits<{
  (e: 'acceptConsent'): void;
  (e: 'openSettings'): void;
}>();

const platformDisplayName = computed(() => {
  const lowerPlatform = props.platform.toLowerCase();
  if (lowerPlatform.includes('googlemaps') || lowerPlatform.includes('maps')) return 'Google Maps';
  if (lowerPlatform.includes('youtube')) return 'YouTube';
  if (lowerPlatform.includes('tiktok')) return 'TikTok';
  if (lowerPlatform.includes('instagram')) return 'Instagram';
  return props.platform; // Fallback
});

const iconDetails = computed(() => {
  switch (props.platform.toLowerCase()) {
    case 'youtube': return { class: 'fab fa-youtube', color: 'text-red-500 dark:text-red-400', mini: 'fab fa-youtube' };
    case 'tiktok': return { class: 'fab fa-tiktok', color: 'text-black dark:text-white', mini: 'fab fa-tiktok' }; // TikTok spezifische Farbe
    case 'instagram': return { class: 'fab fa-instagram', color: 'text-pink-600 dark:text-pink-500', mini: 'fab fa-instagram' };
    case 'googlemaps': return { class: 'fas fa-map-marked-alt', color: 'text-green-500 dark:text-green-400', mini: 'fas fa-map-marker-alt' };
    default: return { class: 'fas fa-photo-video', color: 'text-gray-500 dark:text-gray-400', mini: 'fas fa-external-link-alt' };
  }
});

const iconClass = computed(() => `${iconDetails.value.class} ${iconDetails.value.color}`);
const iconColor = computed(() => { // Direkt für Style-Binding, falls Tailwind-Klasse nicht greift
    if (iconDetails.value.color.startsWith('text-')) return undefined; // Handled by class
    return iconDetails.value.color;
});
const iconClassMini = computed(() => iconDetails.value.mini);

</script>

<style scoped>
/* Keine zusätzlichen Styles hier nötig, AppButton und Tailwind regeln das. */
.external-media-placeholder.aspect-video {
  aspect-ratio: 16 / 9;
}
.min-h-\[250px\] {
  min-height: 250px;
}
</style>
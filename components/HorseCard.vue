<!-- components/HighlightCard.vue -->
<template>
  <!-- Die Karte selbst mit Styling und Hover-Effekt -->
  <div class="highlight-card bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1.5 transition-transform duration-300 text-left flex flex-col">
    <!-- Bild mit NuxtImg für Optimierung -->
    <NuxtImg
        :src="imgSrc"
        :alt="altText"
        class="w-full h-48 object-cover" <!-- Feste Höhe für Konsistenz -->
    width="300" height="192" densities="1x 2x" format="webp" quality="75" loading="lazy"
    />
    <!-- Textinhalt der Karte -->
    <div class="p-5 flex-grow flex flex-col justify-between">
      <!-- Oberer Teil mit Titel und Beschreibung -->
      <div>
        <h3 class="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{{ title }}</h3>
        <p class="text-sm text-gray-600 dark:text-gray-400 mb-4 min-h-[4.5em]"> {/* Mindesthöhe für ca. 3 Zeilen */}
          {{ description }}
        </p>
      </div>
      <!-- Button/Link am unteren Rand -->
      <div class="mt-auto"> {/* Sorgt dafür, dass der Button unten bleibt */}
        <NuxtLink :to="link" class="card-btn inline-flex items-center gap-1.5">
          {{ linkText }} <i class="fas fa-arrow-right text-xs" aria-hidden="true"></i>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
// Importiere notwendige Komponenten (Nuxt macht das meist automatisch)
import { NuxtLink, NuxtImg } from '#components';

// Definiere die Props, die diese Komponente von außen erwartet
// Das macht die Komponente wiederverwendbar
defineProps({
  // Pfad zum Bild (erforderlich)
  imgSrc: {
    type: String,
    required: true
  },
  // Alternativtext für das Bild (gut für SEO und Barrierefreiheit)
  altText: {
    type: String,
    default: 'Highlight Bild' // Standardwert, falls nicht angegeben
  },
  // Titel der Karte (erforderlich)
  title: {
    type: String,
    required: true
  },
  // Beschreibungstext der Karte (erforderlich)
  description: {
    type: String,
    required: true
  },
  // Ziel-URL für den Link/Button (erforderlich)
  link: {
    type: String,
    required: true
  },
  // Text für den Link/Button
  linkText: {
    type: String,
    default: 'Mehr erfahren' // Standardwert
  }
});
</script>

<style scoped>
/* Spezifische Styles für die Highlight Card, falls Tailwind nicht ausreicht */
.highlight-card {
  /* Beispiel: leichter Innenabstand, falls nötig */
}
/* Stellt sicher, dass die Beschreibung eine Mindesthöhe hat,
   damit Karten mit weniger Text nicht kleiner sind */
.min-h-\[4\.5em\] {
  min-height: 4.5em;
}
</style>
<template>
  <section class="news-ticker-section bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 py-2 overflow-hidden whitespace-nowrap">
    <div ref="tickerContainer" class="ticker-container inline-block" :style="{ animationDuration: animationDuration }">
      <!-- Ticker Items werden hier dupliziert für nahtlosen Loop -->
      <span v-for="n in 2" :key="n" class="ticker-items inline-block">
        <span class="ticker-item mx-12 text-sm text-gray-600 dark:text-gray-400">
          <i class="fas fa-birthday-cake text-primary-color mr-2"></i>Unvergessliche Kindergeburtstage mit Ponyreiten!
        </span>
        <span class="ticker-item mx-12 text-sm text-gray-600 dark:text-gray-400">
          <i class="fas fa-campground text-green-500 mr-2"></i>Jetzt Plätze für die Ferienkurse sichern!
        </span>
        <span class="ticker-item mx-12 text-sm text-gray-600 dark:text-gray-400">
          <i class="fas fa-heartbeat text-red-500 mr-2"></i>Reittherapie: Spielerisch fördern & stärken.
        </span>
        <span class="ticker-item mx-12 text-sm text-gray-600 dark:text-gray-400">
          <i class="fas fa-horse text-yellow-600 mr-2"></i>Schnupperstunden Ponyreiten verfügbar!
        </span>
      </span>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

const tickerContainer = ref(null);
const estimatedItemWidth = 300; // Schätzung der durchschnittlichen Breite eines Items + Margin
const itemsCount = 4; // Anzahl der einzelnen Nachrichten im Ticker

// Berechne die Animationsdauer basierend auf der geschätzten Breite
// Ziel: ca. 50-80 Pixel pro Sekunde Geschwindigkeit
const animationDuration = computed(() => {
  const totalWidth = estimatedItemWidth * itemsCount;
  const duration = totalWidth / 60; // Beispiel: 60px pro Sekunde
  return `${Math.max(15, duration)}s`; // Mindestdauer 15s
});

</script>

<style scoped>
@keyframes ticker-move-endless {
  0% { transform: translateX(0%); }
  100% { transform: translateX(-50%); } /* Bewegt um die Breite eines Sets */
}

.ticker-container {
  /* Animation wird direkt im Template über :style gesetzt */
  animation: ticker-move-endless linear infinite;
}

/* Optional: Animation pausieren bei Hover */
.news-ticker-section:hover .ticker-container {
  animation-play-state: paused;
}
</style>
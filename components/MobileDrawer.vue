<template>
  <!-- Mobile navigation drawer -->
  <Transition
    enter-active-class="transition-opacity ease-linear duration-300"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-opacity ease-linear duration-300"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0 pointer-events-none"
  >
    <div
      v-if="isOpen" <!-- NEU: Diese Prop steuert die Sichtbarkeit -->
    class="md:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
    @click.self="emit('close')"
    aria-modal="true"
    role="dialog"
    aria-labelledby="mobile-menu-title"
    >
    <Transition
      enter-active-class="transition ease-in-out duration-300 transform"
      enter-from-class="translate-x-full"
      enter-to-class="translate-x-0"
      leave-active-class="transition ease-in-out duration-300 transform"
      leave-from-class="translate-x-0"
      leave-to-class="translate-x-full"
    >
      <aside
        v-if="isOpen"
        class="absolute top-0 right-0 w-72 max-w-[85vw] h-full bg-white dark:bg-gray-900 shadow-xl flex flex-col px-5 py-6 space-y-6 overflow-y-auto"
        tabindex="-1"
        @keydown.esc="emit('close')"
        ref="drawerContent" <!-- Ref für Fokus-Management -->
      >
      <h2 id="mobile-menu-title" class="sr-only">Mobiles Menü</h2> <!-- Für Barrierefreiheit -->
      <header class="flex items-center justify-between pb-4 border-b border-gray-200 dark:border-gray-700">
        <NuxtLink to="/" class="flex items-center gap-2.5 font-semibold text-gray-800 dark:text-white text-base sm:text-lg" @click="handleNavigation">
          <NuxtImg src="/images/logos/logo.svg" alt="Leben ist ein Ponyhof Logo" width="30" height="30" format="svg" />
          <span>Leben ist ein Ponyhof</span>
        </NuxtLink>
        <button
          @click="emit('close')"
          class="p-2 rounded-md text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-color"
          aria-label="Menü schließen"
        >
          <i class="fas fa-times text-xl sm:text-2xl"></i>
        </button>
      </header>

      <nav class="flex-1 space-y-1 text-base font-medium" role="navigation" aria-label="Hauptnavigation Mobil">
        <NuxtLink
          v-for="item in items"
          :key="item.to?.path || item.to" <!-- Sicherer Key-Zugriff -->
        :to="item.to"
        class="nav-item group flex items-center px-3 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-primary-color/10 dark:hover:bg-primary-light/10 hover:text-primary-color dark:hover:text-primary-light transition-colors duration-150"
        active-class="bg-primary-color/10 dark:bg-primary-light/10 text-primary-color dark:text-primary-light font-semibold"
        @click="handleNavigation"
        >
        <i v-if="item.icon" :class="[item.icon, 'mr-3 w-5 text-center text-lg text-gray-500 dark:text-gray-400 group-hover:text-primary-color dark:group-hover:text-primary-light']"></i>
        <span>{{ item.label }}</span>
        </NuxtLink>
      </nav>

      <div class="space-y-3 pt-4 border-t border-gray-200 dark:border-gray-700">
        <AppButton
          :to="{ path: '/contact' }"
          variant="primary"
          size="lg"
          fullWidth
          @click="handleNavigation"
        >
          Kontakt aufnehmen
        </AppButton>
        <button
          @click="emit('toggleDark')"
          class="w-full px-3 py-3 rounded-lg border border-gray-300 dark:border-gray-600 flex items-center justify-center gap-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-color/50 text-sm"
          aria-label="Farbschema wechseln"
        >
          <i :class="isDark ? 'fas fa-sun text-yellow-400' : 'fas fa-moon text-indigo-400'" class="text-xl"></i>
          <span>{{ isDark ? 'Helles Design' : 'Dunkles Design' }}</span>
        </button>
      </div>
      </aside>
    </Transition>
    </div>
  </Transition>
</template>

<script setup>
// NuxtLink und NuxtImg sind auto-importiert, aber es schadet nicht, sie hier zu haben, um Klarheit zu schaffen.
import { NuxtLink, NuxtImg } from '#components';
import AppButton from '~/components/AppButton.vue'; // Importiere deine Button-Komponente
import { ref, watch, nextTick } from 'vue';

// Props
const props = defineProps({
  isOpen: { type: Boolean, default: false }, // Prop, um den Drawer von außen zu steuern
  items: { type: Array, default: () => [] }, // Navigationspunkte
  isDark: { type: Boolean, default: false }  // Darkmode-Status
});

// Emits
const emit = defineEmits(['close', 'toggleDark']);

const drawerContent = ref(null);

// Funktion, die aufgerufen wird, wenn ein Navigationslink geklickt wird
const handleNavigation = () => {
  emit('close'); // Schließe den Drawer
};

// Fokus auf den Drawer setzen, wenn er sich öffnet (für Barrierefreiheit)
watch(() => props.isOpen, (newValue) => {
  if (newValue) {
    nextTick(() => {
      drawerContent.value?.focus();
    });
  }
});
</script>

<style scoped>
/* Dein btn-primary wurde durch die AppButton Komponente ersetzt,
   die ihre eigenen Styles für variant="primary" hat. */

.nav-item.active-class i { /* Styling für Icons im aktiven Navigationslink */
  @apply text-primary-color dark:text-primary-light;
}
</style>
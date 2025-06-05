<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition-opacity ease-linear duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity ease-linear duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0 pointer-events-none"
    >
      <div
        v-if="props.isOpen"
        :id="props.id"
        class="md:hidden fixed inset-0 z-[9998] bg-black/50 backdrop-blur-sm"
        @click.self="emitClose"
        aria-modal="true"
        role="dialog"
        aria-labelledby="mobile-menu-title"
      >
        <Transition
          enter-active-class="transition ease-out duration-300 transform"
          enter-from-class="translate-x-full"
          enter-to-class="translate-x-0"
          leave-active-class="transition ease-in duration-200 transform"
          leave-from-class="translate-x-0"
          leave-to-class="translate-x-full"
        >
          <aside
            v-if="props.isOpen"
            ref="drawerContentRef"
            tabindex="-1"
            class="absolute top-0 right-0 w-full max-w-xs sm:max-w-sm h-full bg-white dark:bg-gray-900 shadow-2xl flex flex-col overflow-y-auto"
            @keydown.esc="emitClose"
          >
            <h2 id="mobile-menu-title" class="sr-only">Mobiles Menü</h2>

            <!-- Header -->
            <header class="flex items-center justify-between p-4 border-b border-gray-200/80 dark:border-gray-700/80 sticky top-0 z-10 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm">
              <NuxtLink to="/" class="group flex items-center gap-2.5" @click="handleNavigation">
                <NuxtImg
                  src="/images/logos/logo.svg"
                  alt="Logo Leben ist ein Ponyhof"
                  class="w-8 h-8 dark:invert group-hover:scale-105 transition-transform"
                  width="32"
                  height="32"
                />
                <div class="flex flex-col">
                  <span class="font-semibold text-gray-800 dark:text-white text-md">Ponyhof</span>
                  <span class="text-xs text-gray-500 dark:text-gray-400 -mt-0.5">Menü</span>
                </div>
              </NuxtLink>
              <button
                @click="emitClose"
                class="group p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-red-50 dark:hover:bg-red-900/30 hover:text-red-600 dark:hover:text-red-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500/70 transition-all duration-200"
                aria-label="Menü schließen"
              >
                <i class="fas fa-times text-xl transition-transform duration-300 group-hover:rotate-90"></i>
              </button>
            </header>

            <!-- Navigation -->
            <nav class="flex-1 p-4 space-y-1.5" role="navigation" aria-label="Mobile Hauptnavigation">
              <NuxtLink
                v-for="item in props.items"
                :key="item.to.toString()"
                :to="item.to"
                class="nav-item group flex items-center px-3.5 py-3 rounded-lg text-gray-700 dark:text-gray-300 transition-all duration-200 ease-out"
                :class="isActiveRoute(item.to)
                  ? 'bg-primary-color/10 text-primary-color dark:bg-primary-light/10 dark:text-primary-light font-medium shadow-sm'
                  : 'hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-primary-color dark:hover:text-primary-light'"
                @click="handleNavigation"
              >
                <i v-if="item.icon" :class="[item.icon, 'mr-3 w-5 text-center text-lg opacity-70 group-hover:opacity-100 transition-opacity']"></i>
                <span class="flex-1 text-sm">{{ item.label }}</span>
                <span v-if="item.new" class="px-2 py-0.5 text-[9px] bg-gradient-to-r from-pink-500 to-orange-400 text-white rounded-full leading-none animate-pulse shadow-sm">✨ NEU</span>
                <i v-if="props.items && props.items.length > 0" class="fas fa-chevron-right text-xs text-gray-400 dark:text-gray-500 ml-2 opacity-0 group-hover:opacity-100 transition-opacity group-[.router-link-active]:opacity-100"></i>
              </NuxtLink>
            </nav>

            <!-- Quick Actions & Dark Mode -->
            <div class="p-4 space-y-3 border-t border-gray-200/80 dark:border-gray-700/80 bg-gray-50 dark:bg-gray-800/50">
              <AppButton @click="emitOpenQuickInquiry" fullWidth size="normal" variant="primary">
                <i class="fas fa-paper-plane mr-2"></i> Schnellanfrage
              </AppButton>
              <a
                :href="`tel:${phoneNumberForLink}`"
                class="app-button secondary-variant justify-center w-full"
                @click="handleNavigation"
              >
                <i class="fas fa-phone mr-2"></i> {{ phoneNumberDisplay }}
              </a>
              <AppButton @click="emitToggleDark" fullWidth size="normal" variant="secondary">
                <i :class="props.isDark ? 'fas fa-sun text-yellow-400' : 'fas fa-moon text-indigo-400'" class="mr-2 text-lg"></i>
                {{ props.isDark ? 'Helles Design' : 'Dunkles Design' }}
              </AppButton>
            </div>
          </aside>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, watch, nextTick, computed } from 'vue';
import { NuxtLink, NuxtImg } from '#components';
import AppButton from '~/components/AppButton.vue';
import type { RouteLocationRaw } from 'vue-router';
import { useRoute, useRuntimeConfig } from '#app';

// Interface Definitionen MÜSSEN VOR defineProps stehen
interface DrawerItem {
  label: string;
  to: RouteLocationRaw;
  icon?: string;
  new?: boolean;
}

interface Props {
  isOpen: boolean;
  items: DrawerItem[];
  isDark: boolean;
  id?: string;
}

const props = defineProps<Props>();
watch(() => props.isOpen, (newValue) => {
  if (newValue) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
}, { immediate: true });

const emit = defineEmits<{
  (e: 'close'): void
  (e: 'toggle-dark'): void
  (e: 'open-quick-inquiry'): void
}>()

const drawerContentRef = ref<HTMLElement | null>(null);
const currentRoute = useRoute();
const config = useRuntimeConfig();
const phoneNumberDisplay = ref(config.public.businessAddress.telephone || '+49 1575 9666733');
const phoneNumberForLink = computed(() => phoneNumberDisplay.value.replace(/[\s/]+/g, ''));

const emitClose = () => { emit('close'); }
const emitToggleDark = () => { emit('toggle-dark'); }
const emitOpenQuickInquiry = () => {
  emit('open-quick-inquiry');
  emitClose();
}

const handleNavigation = () => { emitClose(); };

const isActiveRoute = (to: RouteLocationRaw): boolean => {
  const resolved = currentRoute.router.resolve(to);
  if (resolved.path === '/') return currentRoute.path === '/';
  return currentRoute.path.startsWith(resolved.path);
};

watch(() => props.isOpen, (newValue) => {
  if (newValue) {
    nextTick(() => {
      drawerContentRef.value?.focus();
    });
    if (process.client) {
      document.body.style.overflow = 'hidden';
    }
  } else {
    if (process.client) {
      document.body.style.overflow = '';
    }
  }
}, { immediate: true });
</script>

<style scoped>
.nav-item.router-link-active:not([class*="bg-primary-color"]) {
  /* Aktives Styling wird jetzt direkt in der :class Bindung gehandhabt */
}
.app-button {
  display: inline-flex;
  align-items: center;
  font-weight: 600;
  padding: 0.625rem 1rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  transition: background-color 0.2s ease-out, box-shadow 0.2s ease-out;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}
.app-button.secondary-variant {
  background-color: #e5e7eb;
  color: #374151;
}
.app-button.secondary-variant:hover {
  background-color: #d1d5db;
}
.dark .app-button.secondary-variant {
  background-color: #374151;
  color: #e5e7eb;
}
.dark .app-button.secondary-variant:hover {
  background-color: #4b5563;
}
</style>
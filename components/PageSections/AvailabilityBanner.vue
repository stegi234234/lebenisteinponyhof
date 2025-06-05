<template>
  <section class="availability-banner py-6 bg-white dark:bg-gray-800/80" aria-labelledby="availability-heading">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row items-center justify-between gap-6 p-6 bg-gradient-to-r from-amber-100 to-amber-200 dark:from-amber-800/30 dark:to-amber-700/40 rounded-xl border border-amber-300 dark:border-amber-600/50 shadow-lg">
        <div class="flex-1">
          <div class="flex items-center mb-3">
            <div class="w-3.5 h-3.5 rounded-full bg-green-500 dark:bg-green-400 mr-2.5 animate-pulse ring-2 ring-green-500/30 dark:ring-green-400/30"></div>
            <h3 id="availability-heading" class="text-lg font-semibold text-gray-800 dark:text-white">
              Freie Termine für Ponyreiten & Kurse in {{ businessAddress.city }}
            </h3>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-sm md:text-base">
            <div class="availability-item flex items-center">
              <i class="fas fa-check-circle text-green-500 dark:text-green-400 mr-2 text-base"></i>
              <span class="text-gray-700 dark:text-gray-300">Kindergeburtstage ({{ businessAddress.city }}): Noch Termine ab 11. Juni frei!</span>
            </div>
            <div class="availability-item flex items-center">
              <i class="fas fa-check-circle text-green-500 dark:text-green-400 mr-2 text-base"></i>
              <span class="text-gray-700 dark:text-gray-300">Ferienkurse Pfingsten: Nur noch 5 Plätze verfügbar!</span>
            </div>
            <div class="availability-item flex items-center">
              <i class="fas fa-check-circle text-green-500 dark:text-green-400 mr-2 text-base"></i>
              <span class="text-gray-700 dark:text-gray-300">
                <NuxtLink :to="{ path: '/angebote', hash: '#ponyreiten'}" class="hover:underline font-medium text-primary-color dark:text-primary-light">Ponyreiten in {{ businessAddress.city }}</NuxtLink>: Nächster freier Termin am 15. Mai.
              </span>
            </div>
            <div class="availability-item flex items-center">
              <i class="fas fa-check-circle text-green-500 dark:text-green-400 mr-2 text-base"></i>
              <span class="text-gray-700 dark:text-gray-300">Schnupperstunden Reiten: 5 Plätze warten auf euch!</span>
            </div>
          </div>
        </div>
        <div class="quick-booking flex flex-col items-center md:items-end space-y-3 mt-4 md:mt-0 md:ml-6 flex-shrink-0">
          <p class="text-gray-700 dark:text-gray-300 text-sm md:text-base font-medium">Schnell einen Termin für {{ businessAddress.city }} sichern:</p>
          <AppButton
            :to="{ path: '/contact', query: { subject: `Terminanfrage Ponyhof ${businessAddress.city}` } }"
            size="lg"
            variant="primary"
            class="w-full md:w-auto flex items-center justify-center !bg-amber-500 hover:!bg-amber-600 !text-white dark:!bg-amber-600 dark:hover:!bg-amber-700"
          >
            <i class="fas fa-calendar-check mr-2"></i>
            Jetzt Termin anfragen
          </AppButton>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import AppButton from '~/components/AppButton.vue';
import { NuxtLink } from '#components';
import { useRuntimeConfig } from '#app';

const config = useRuntimeConfig();
const businessAddress = config.public.businessAddress;
</script>

<style scoped>
/* Du könntest hier noch spezifische Animationen für den "pulse" Effekt hinzufügen,
   wenn die Tailwind-Standardanimation nicht ausreicht. */
.animate-pulse {
  animation: pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
/* Keyframes sind global in tailwind.css, falls du benutzerdefinierte pulseStatus Animationen brauchst. */
</style>
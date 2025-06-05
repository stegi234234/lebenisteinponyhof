<template>
  <section id="preise" aria-labelledby="preise-heading" class="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700/50">
    <h2 id="preise-heading" class="text-2xl md:text-3xl font-semibold mb-6 md:mb-8 text-center text-gray-800 dark:text-white">
      <i class="fas fa-tags text-primary-color dark:text-primary-light mr-2.5"></i>Unsere Preise in {{ city }} im Überblick
    </h2>

    <!-- Preistabelle für Desktop -->
    <div class="hidden md:block overflow-x-auto rounded-md border border-gray-200 dark:border-gray-700">
      <table class="min-w-full bg-white dark:bg-gray-800">
        <thead class="bg-gray-50 dark:bg-gray-700/50">
          <tr>
            <th v-for="header in tableHeaders" :key="header" class="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-300">
              {{ header }}
            </th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
          <tr v-for="item in priceItems" :key="item.name" class="hover:bg-gray-50/50 dark:hover:bg-gray-700/30 transition-colors duration-150">
            <td class="py-3.5 px-4 text-sm text-gray-800 dark:text-white font-medium">{{ item.name }}</td>
            <td class="py-3.5 px-4 text-sm text-gray-600 dark:text-gray-300">{{ item.duration }}</td>
            <td class="py-3.5 px-4 text-sm text-gray-600 dark:text-gray-300 font-semibold">{{ item.price }}</td>
            <td class="py-3.5 px-4 text-sm">
              <span :class="availabilityClass(item.availabilityType)">{{ item.availabilityText }}</span>
            </td>
            <td class="py-3.5 px-4 text-right">
              <AppButton
                v-if="item.contactType === 'link'"
                :to="item.contactTo"
                size="sm"
                variant="outline-primary"
                class="!text-xs !px-3 !py-1.5"
              >
                Anfragen
              </AppButton>
              <AppButton
                v-else-if="item.contactType === 'modal'"
                @click="$emit('showInterest', item.name)"
                size="sm"
                variant="secondary"
                class="!text-xs !px-3 !py-1.5"
              >
                Vormerken
              </AppButton>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Preiskarten für Mobile -->
    <div class="md:hidden space-y-4">
      <div v-for="item in priceItems" :key="`mobile-${item.name}`" class="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 shadow-sm border border-gray-200 dark:border-gray-600/50">
        <div class="flex justify-between items-start mb-1.5">
          <h3 class="font-semibold text-gray-800 dark:text-white flex-1 pr-2">{{ item.name }}</h3>
          <span class="text-primary-color dark:text-primary-light font-semibold text-lg whitespace-nowrap">{{ item.price }}</span>
        </div>
        <p class="text-xs text-gray-500 dark:text-gray-400 mb-2">{{ item.duration }}</p>
        <div class="flex justify-between items-center">
          <span :class="availabilityClass(item.availabilityType)" class="text-xs">{{ item.availabilityText }}</span>
           <AppButton
            v-if="item.contactType === 'link'"
            :to="item.contactTo"
            size="sm"
            variant="outline-primary"
            class="!text-xs !px-3 !py-1.5"
          >
            Anfragen
          </AppButton>
          <AppButton
            v-else-if="item.contactType === 'modal'"
            @click="$emit('showInterest', item.name)"
            size="sm"
            variant="secondary"
            class="!text-xs !px-3 !py-1.5"
          >
            Vormerken
          </AppButton>
        </div>
      </div>
    </div>

    <div class="text-center mt-8 text-sm text-gray-600 dark:text-gray-400">
      <p>Alle Preise sind Richtwerte und können je nach individuellen Anforderungen variieren.</p>
      <p class="mt-1">Geschwisterrabatt und 10er-Karten mit Preisvorteil auf Anfrage verfügbar.</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import AppButton from '~/components/AppButton.vue';
import type { RouteLocationRaw } from 'vue-router';

interface PriceItem {
  name: string;
  duration: string;
  price: string;
  availabilityText: string;
  availabilityType: 'green' | 'amber' | 'gray';
  contactType: 'link' | 'modal';
  contactTo?: RouteLocationRaw;
}

const props = defineProps<{
  city: string;
}>();

defineEmits<{(e: 'showInterest', offerName: string): void; }>();

const tableHeaders = ['Angebot', 'Dauer', 'Preis', 'Verfügbarkeit', ''];

const priceItems = ref<PriceItem[]>([
  { name: 'Schnupperstunde Ponyreiten', duration: '30 Minuten', price: 'ab 25€', availabilityText: '5 Plätze frei', availabilityType: 'green', contactType: 'link', contactTo: { path: '/contact', query: { subject: `Anfrage Schnupperstunde Ponyreiten ${props.city}` } } },
  { name: 'Geführtes Ponyreiten', duration: '45-60 Minuten', price: 'ab 35€', availabilityText: 'Termine ab 15. Mai', availabilityType: 'green', contactType: 'link', contactTo: { path: '/contact', query: { subject: `Anfrage Geführtes Ponyreiten ${props.city}` } } },
  { name: 'Shetty-Wanderung', duration: 'ca. 90 Minuten', price: 'ab 35€', availabilityText: 'Wochenends verfügbar', availabilityType: 'green', contactType: 'link', contactTo: { path: '/contact', query: { subject: `Anfrage Shetty-Wanderung ${props.city}` } } },
  { name: 'Zwergen-Wanderung', duration: '60 Minuten', price: 'ab 30€', availabilityText: 'Verfügbar', availabilityType: 'green', contactType: 'link', contactTo: { path: '/contact', query: { subject: `Anfrage Zwergen-Wanderung ${props.city}` } } },
  { name: 'Kindergeburtstag', duration: 'ca. 2,5 - 3 Std.', price: 'ab 120€', availabilityText: 'Ab 11. Juni', availabilityType: 'amber', contactType: 'link', contactTo: { path: '/contact', query: { subject: `Anfrage Kindergeburtstag ${props.city}` } } },
  { name: 'Ferienkurs', duration: '5 Tage, je 3 Std.', price: 'ab 149€', availabilityText: 'Noch 3 Plätze frei', availabilityType: 'green', contactType: 'link', contactTo: { path: '/contact', query: { subject: `Anfrage Ferienkurs ${props.city}` } } },
  { name: 'Reittherapie', duration: '45-60 Minuten', price: 'Auf Anfrage', availabilityText: 'Ab 2026', availabilityType: 'gray', contactType: 'modal' },
]);

const availabilityClass = (type: 'green' | 'amber' | 'gray') => {
  switch (type) {
    case 'green': return 'text-green-600 dark:text-green-400 font-medium';
    case 'amber': return 'text-amber-600 dark:text-amber-400 font-medium';
    case 'gray': return 'text-gray-500 dark:text-gray-400';
    default: return 'text-gray-600 dark:text-gray-300';
  }
};
</script>